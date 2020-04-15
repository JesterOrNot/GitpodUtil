FROM gitpod/workspace-full-vnc

USER root

RUN npm install -g vsce

ENV GITPOD_STATIC_PLUGINS=/var/vsix

RUN mkdir -p /var/vsix/

RUN chown gitpod:gitpod -R /var/vsix/
