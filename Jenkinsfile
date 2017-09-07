def image_name = "docker.starpost.cn/gateway-ui:$BUILD_NUMBER"

def docker_server = 'tcp://y5.starpost.cn:2376'
def docker_cred = 'production'

def container_name = 'gateway-ui'


properties([
	buildDiscarder(logRotator(numToKeepStr: '10')),
	pipelineTriggers([
		upstream(
			threshold: hudson.model.Result.SUCCESS,
			upstreamProjects: 'photon-web'
		),
		pollSCM('H/2 * * * *')
	])
])

node {

	stage("Checkout") {
		checkout scm
		checkout([$class: 'GitSCM',
			branches: [[name: '*/master']],
			extensions: [[$class: 'RelativeTargetDirectory', relativeTargetDir: 'repo']],
			userRemoteConfigs: [[
				credentialsId: 'b48ac1f1-f4e8-4cdb-a6aa-9e34eebf11be', url: 'git@git.starpost.cn:devops/repo.git']]])
	}

	stage("Build") {
		withEnv(["PATH+NODEJS=${tool 'Node 6.9.1'}/bin"]) {
			sh '''
				npm --registry=https://registry.npm.taobao.org \
					--phantomjs=http://npm.taobao.org/mirrors/phantomjs \
					--ChromeDriver=http://npm.taobao.org/mirrors/chromedriver \
					--Selenium=http://npm.taobao.org/mirror/selenium -d install
			'''

			sh '''
				npm --registry=https://registry.npm.taobao.org \
					--phantomjs=http://npm.taobao.org/mirrors/phantomjs \
					--ChromeDriver=http://npm.taobao.org/mirrors/chromedriver \
					--Selenium=http://npm.taobao.org/mirror/selenium -d run build
			'''
		}
	}

    stage("Build Docker Image") {
		sh 'mkdir -p target'
                docker.build(image_name)
                sh "echo \"DOCKER_IMAGE=\'$image_name\'\" > target/dockerimage.sh"
                archiveArtifacts artifacts: 'target/dockerimage.sh'
	}

    stage("Push Docker Image") {
                def img = docker.image(image_name);
		img.push("$BUILD_NUMBER")
		img.push("latest")
	}


/* --
	stage("Purge Previous Deployment") {
		def img = readFile('target/dockerimage.sh').trim()
		docker.withServer(docker_server, docker_cred) {
			ignoreErrors { sh "docker stop $container_name" }
			ignoreErrors { sh "docker rm $container_name" }
		}
    }

	
	stage("Deploy to Production") {
		def img = readFile('target/dockerimage.sh').trim()
		withEnv([img]) {
			echo "Deploying $DOCKER_IMAGE to Production"
			docker.withServer(docker_server, docker_cred) {
				
				docker.image("$DOCKER_IMAGE")
					.run("--name=$container_name --restart=always -d "
						+ "--label=\"backend=$container_name\" "
						+ "-p 80:80 ")
                        }
                }

	} -- */

}

def ignoreErrors(Closure closure) {
	try {
		closure()
	} catch(e) {
	}
}

