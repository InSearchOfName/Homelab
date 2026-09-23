FROM nginx:alpine

RUN mkdir -p /usr/share/nginx/html/public

COPY index.html index.css index.js /usr/share/nginx/html/
COPY public/ /usr/share/nginx/html/public/

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
