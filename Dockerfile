FROM nginx

COPY dist/ /usr/share/nginx/html/
COPY dist/index.html /usr/share/nginx/html/index.tmpl

RUN ls -lR /usr/share/nginx/html/
 
COPY nginx/vue.conf /etc/nginx/conf.d/default.conf

COPY scripts/clean_start.sh /
RUN chmod a+x /clean_start.sh
ENTRYPOINT ["/clean_start.sh"]