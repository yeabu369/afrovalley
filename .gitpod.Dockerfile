FROM gitpod/workspace-full

# Python3.11 Setup
RUN sudo add-apt-repository ppa:deadsnakes/ppa -y \
    && sudo apt update \
    && sudo apt install python3.11 -y \
    && sudo update-alternatives --remove python3 /usr/bin/python3.8 \
    && sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.11 1 \ 
    && sudo apt install python3.11-venv -y