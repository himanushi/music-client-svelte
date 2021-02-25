# LTS 2025-04
FROM ubuntu:20.04

# ref: https://qiita.com/jacob_327/items/e99ca1cf8167d4c1486d#warning-apt-key-output-should-not-be-parsed-stdout-is-not-a-terminal
ENV APT_KEY_DONT_WARN_ON_DANGEROUS_USAGE yes

# ref: https://qiita.com/haessal/items/0a83fe9fa1ac00ed5ee9
ENV DEBCONF_NOWARNINGS yes

# update ubuntu
RUN apt-get -qq update
RUN apt-get -qq -y install curl

# deno
# ref: https://github.com/denoland/deno_install#known-issues
RUN apt-get install -y unzip
RUN curl -fsSL https://deno.land/x/install/install.sh | sh
ENV PATH $PATH:~/.deno/bin

# set locale
# ref: https://qiita.com/n_oshiumi/items/cfe91c60730f602b38eb
RUN apt-get install -y locales \
    && locale-gen ja_JP.UTF-8 \
    && echo "export LANG=ja_JP.UTF-8" >> ~/.bashrc

RUN mkdir /app
WORKDIR /app
COPY . /app

# ref: https://qiita.com/soarflat/items/06377f3b96964964a65d
ENV PATH $PATH:./node_modules/.bin

EXPOSE 8080
