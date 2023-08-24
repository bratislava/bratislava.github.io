# Windows WSL setup

Here we briefly show to setup a WSL v2 and our bratislava tools within.

## Install WSL

For this you will need administrator access to your computer. There are plenty of guides out there to install wsl. You can most likely follow any of them

- https://docs.microsoft.com/en-us/windows/wsl/install
- https://pureinfotech.com/install-windows-subsystem-linux-2-windows-10/
- https://www.ssl.com/how-to/enable-linux-subsystem-install-ubuntu-windows-10/

But, with that said, here is our take on it

1. First you need to [enable linux subsystem](https://www.ssl.com/how-to/enable-linux-subsystem-install-ubuntu-windows-10/) in your Windows settings.
   1. Hit windows key and search for "Turn Windows features on or off", or in Slovak localization it is "Zapnúť alebo vypnúť súčasti systému Windows"
   2. In the list search for "Windows Subsystem for Linux" or again in Slovak localization "Podsystém Windowsu pre Linux"
2. Once enabled, navigate to Microsoft Store and search for Ubuntu (or preferred Linux distro) and hit "GET" button. _Note: we suggest you install Ubuntu as there might be fewer issues. At the time of this writing the latest version is "Ubuntu 22.04.1 LTS"_
3. Now you should have your Linux distro installed. Hit windows key and open it. This should install/unpack everything necessary it will also prompt you for your Linux username and password (this will be the password that you will use, for example, when you use `sudo`)
4. Lastly, upgrade to WSL v2.
   1. Open PowerShell with administrator access
   2. Run `wsl -l -v` command to see the installed distribution and their wsl versions
   3. To change versions, use the command: `wsl --set-version <distro name> 2`. In our case it is `wsl --set-version Ubuntu-22.04 2`
   4. (Optional) You can also set a default wsl version for any future installation by running `wsl --set-default-version <Version#>`
5. After this you can reopen your terminal and you should be running your WSL v2 Linux distribution
6. (Optional but probably desired) As a first thing you should probably upgrade and update your system with the latest packages. You can do so by running

   ```bash copy
   sudo apt upgrade
   sudo apt update
   ```

