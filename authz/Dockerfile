FROM ghcr.io/cerbos/cerbos:0.18.0
ARG PORT
COPY policies /tmp/authz/policies
COPY config.yaml /tmp/authz/config.yaml
WORKDIR /tmp/authz
ENTRYPOINT cerbos server --config=/tmp/authz/config.yaml