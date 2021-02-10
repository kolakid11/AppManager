(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{374:function(e,t,o){"use strict";o.r(t);var a=o(25),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"adb-over-tcp"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adb-over-tcp"}},[e._v("#")]),e._v(" ADB over TCP")]),e._v(" "),o("p",[e._v("Many root-only features can still be used by enabling ADB over TCP. To do that, a PC or Mac is required with Android platform-tools installed, and an Android phone with developer options & USB debugging enabled.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Root users")]),e._v(" "),o("p",[e._v("If superuser permission has been granted to App Manager, it can already execute privileged code without any problem. "),o("strong",[e._v("Therefore, root users don't need to enable ADB over TCP.")]),e._v(" If you still want to use ADB over TCP, you must revoke superuser permission for App Manager and restart your device. You may see "),o("em",[e._v("working on ADB mode")]),e._v(" message without restarting but this isn't entirely true. The server (used as an interface between system and App Manager) is still running in root mode. This is a known issue and will be fixed in a future version of App Manager.")])]),e._v(" "),o("p",[o("em",[e._v("See also: "),o("RouterLink",{attrs:{to:"/faq/adb.html"}},[e._v("FAQ: ADB over TCP")])],1)]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("Table of Contents")]),e._v(" "),o("p"),o("div",{staticClass:"table-of-contents"},[o("ul",[o("li",[o("a",{attrs:{href:"#_1-enable-developer-options"}},[e._v("1. Enable developer options")]),o("ul",[o("li",[o("a",{attrs:{href:"#_1-1-location-of-developer-options"}},[e._v("1.1. Location of developer options")])]),o("li",[o("a",{attrs:{href:"#_1-2-how-to-enable-developer-options"}},[e._v("1.2. How to enable developer options")])])])]),o("li",[o("a",{attrs:{href:"#_2-enable-usb-debugging"}},[e._v("2. Enable USB debugging")]),o("ul",[o("li",[o("a",{attrs:{href:"#_2-1-xiaomi-miui"}},[e._v("2.1. Xiaomi (MIUI)")])]),o("li",[o("a",{attrs:{href:"#_2-2-huawei-emui"}},[e._v("2.2. Huawei (EMUI)")])]),o("li",[o("a",{attrs:{href:"#_2-3-lg"}},[e._v("2.3. LG")])]),o("li",[o("a",{attrs:{href:"#_2-4-troubleshooting"}},[e._v("2.4. Troubleshooting")])])])]),o("li",[o("a",{attrs:{href:"#_3-setup-adb-on-pc-or-mac"}},[e._v("3. Setup ADB on PC or Mac")]),o("ul",[o("li",[o("a",{attrs:{href:"#_3-1-windows"}},[e._v("3.1. Windows")])]),o("li",[o("a",{attrs:{href:"#_3-2-macos"}},[e._v("3.2. macOS")])]),o("li",[o("a",{attrs:{href:"#_3-3-linux"}},[e._v("3.3. Linux")])])])]),o("li",[o("a",{attrs:{href:"#_4-configure-adb-over-tcp"}},[e._v("4. Configure ADB over TCP")]),o("ul",[o("li",[o("a",{attrs:{href:"#_4-1-lineage-os"}},[e._v("4.1. Lineage OS")])]),o("li",[o("a",{attrs:{href:"#_4-2-enable-adb-over-tcp-via-pc-or-mac"}},[e._v("4.2. Enable ADB over TCP via PC or Mac")])]),o("li",[o("a",{attrs:{href:"#_4-3-enable-adb-mode-on-app-manager"}},[e._v("4.3. Enable ADB mode on App Manager")])]),o("li",[o("a",{attrs:{href:"#_4-4-stop-adb-over-tcp"}},[e._v("4.4. Stop ADB over TCP")])])])]),o("li",[o("a",{attrs:{href:"#_5-references"}},[e._v("5. References")])])])]),o("p")]),e._v(" "),o("h2",{attrs:{id:"_1-enable-developer-options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-enable-developer-options"}},[e._v("#")]),e._v(" 1. Enable developer options")]),e._v(" "),o("h3",{attrs:{id:"_1-1-location-of-developer-options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-location-of-developer-options"}},[e._v("#")]),e._v(" 1.1. Location of developer options")]),e._v(" "),o("p",[o("strong",[e._v("Developer options")]),e._v(" is located in Android "),o("strong",[e._v("Settings")]),e._v(", either directly near the bottom of the page (in most ROMs) or under some other settings such as "),o("strong",[e._v("System")]),e._v(" (Lineage OS, Asus Zenfone 8.0+), "),o("strong",[e._v("System")]),e._v(" > "),o("strong",[e._v("Advanced")]),e._v(" (Google Pixel), "),o("strong",[e._v("Additional Settings")]),e._v(" (Xiaomi MIUI, Oppo ColorOS), "),o("strong",[e._v("More Settings")]),e._v(" (Vivo FuntouchOS), "),o("strong",[e._v("More")]),e._v(" (ZTE Nubia). Unlike other options, it is not visible until explicitly enabled by the user. If developer options is enabled, you can use the search box in Android "),o("strong",[e._v("Settings")]),e._v(" to locate it as well.")]),e._v(" "),o("h3",{attrs:{id:"_1-2-how-to-enable-developer-options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-how-to-enable-developer-options"}},[e._v("#")]),e._v(" 1.2. How to enable developer options")]),e._v(" "),o("p",[e._v("This option is available within Android "),o("strong",[e._v("Settings")]),e._v(" as well but like the location of the developer options, it also differs from device to device. But in general, you have to find "),o("strong",[e._v("Build number")]),e._v(" (or "),o("strong",[e._v("MIUI version")]),e._v(" for MIUI ROMs and "),o("strong",[e._v("Software version")]),e._v(" for Vivo FuntouchOS, "),o("strong",[e._v("Version")]),e._v(" for Oppo ColorOS) and tap it at least 7 (seven) times until you finally get a message saying "),o("em",[e._v("You are now a developer")]),e._v(" (you may be prompted to insert pin/password/pattern or solve captchas at this point). In most devices, it is located at the bottom of the settings page, inside "),o("strong",[e._v("About Phone")]),e._v(". But the best way to find it is to use the search box.")]),e._v(" "),o("h2",{attrs:{id:"_2-enable-usb-debugging"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-enable-usb-debugging"}},[e._v("#")]),e._v(" 2. Enable USB debugging")]),e._v(" "),o("p",[e._v("After "),o("a",{attrs:{href:"#_1-1-location-of-developer-options"}},[e._v("locating the developer options")]),e._v(", enable "),o("strong",[e._v("Developer option")]),e._v(" (if not already). After that, scroll down a bit until you will find the option "),o("strong",[e._v("USB debugging")]),e._v(". Use the toggle button on the right hand side to enable it. At this point, you may get an alert prompt where you may have to click "),o("em",[e._v("OK")]),e._v(" to actually enable it. You may also have to enable some other options depending on device vendor and ROM. Here are some examples:")]),e._v(" "),o("h3",{attrs:{id:"_2-1-xiaomi-miui"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-xiaomi-miui"}},[e._v("#")]),e._v(" 2.1. Xiaomi (MIUI)")]),e._v(" "),o("p",[e._v("Enable "),o("strong",[e._v("USB debugging (security settings)")]),e._v(" as well.")]),e._v(" "),o("h3",{attrs:{id:"_2-2-huawei-emui"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-huawei-emui"}},[e._v("#")]),e._v(" 2.2. Huawei (EMUI)")]),e._v(" "),o("p",[e._v("Enable "),o("strong",[e._v("Allow ADB debugging in charge only mode")]),e._v(" as well. When connecting to your PC or Mac, you may get a prompt saying "),o("strong",[e._v("Allow access to device data?")]),e._v(" in which case click "),o("strong",[e._v("YES, ALLOW ACCESS")]),e._v(".")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Notice")]),e._v(" "),o("p",[e._v("Often the "),o("strong",[e._v("USB debugging")]),e._v(" mode could be disabled automatically by the system. If that's the case, repeat the above procedure.")])]),e._v(" "),o("h3",{attrs:{id:"_2-3-lg"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-lg"}},[e._v("#")]),e._v(" 2.3. LG")]),e._v(" "),o("p",[e._v("Make sure you have "),o("strong",[e._v("USB tethering")]),e._v(" enabled.")]),e._v(" "),o("h3",{attrs:{id:"_2-4-troubleshooting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-troubleshooting"}},[e._v("#")]),e._v(" 2.4. Troubleshooting")]),e._v(" "),o("p",[e._v("In case "),o("strong",[e._v("USB Debugging")]),e._v(" is greyed out, you can do the following:")]),e._v(" "),o("ol",[o("li",[e._v("Make sure you enabled USB debugging before connecting your phone to the PC or Mac via USB cable")]),e._v(" "),o("li",[e._v("Enable USB tethering after connecting to PC or Mac via USB cable")]),e._v(" "),o("li",[e._v("(For Samsung) If you're device is running KNOX, you may have to follow some additional steps. See official documentations or consult support for further assistant")])]),e._v(" "),o("h2",{attrs:{id:"_3-setup-adb-on-pc-or-mac"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-setup-adb-on-pc-or-mac"}},[e._v("#")]),e._v(" 3. Setup ADB on PC or Mac")]),e._v(" "),o("p",[e._v("In order to enable ADB over TCP, you have to setup ADB in your PC or Mac. "),o("strong",[o("em",[e._v("Lineage OS users can skip to "),o("a",{attrs:{href:"#_4-1-lineage-os"}},[e._v("section 4.1")]),e._v(".")])])]),e._v(" "),o("h3",{attrs:{id:"_3-1-windows"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-windows"}},[e._v("#")]),e._v(" 3.1. Windows")]),e._v(" "),o("ol",[o("li",[e._v("Download the latest version of "),o("a",{attrs:{href:"https://dl.google.com/android/repository/platform-tools-latest-windows.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android SDK Platform-Tools"),o("OutboundLink")],1),e._v(" for Windows")]),e._v(" "),o("li",[e._v("Extract the contents of the zip file into any directory (such as "),o("code",[e._v("C:\\adb")]),e._v(") and navigate to that directory using "),o("em",[e._v("File Explorer")])]),e._v(" "),o("li",[e._v("Open "),o("strong",[e._v("Command Prompt")]),e._v(" or "),o("strong",[e._v("PowerShell")]),e._v(" from this directory. You can do it manually from the start menu or by holding "),o("code",[e._v("Shift")]),e._v(" and Right clicking within the directory in "),o("em",[e._v("File Explorer")]),e._v(" and then clicking either on "),o("em",[e._v("Open command window here")]),e._v(" or on "),o("em",[e._v("Open PowerShell window here")]),e._v(" (depending on what you have installed). You can now access ADB by typing "),o("code",[e._v("adb")]),e._v(" (Command Prompt) or "),o("code",[e._v("./adb")]),e._v(" (PowerShell). Do not close this window yet")])]),e._v(" "),o("h3",{attrs:{id:"_3-2-macos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-macos"}},[e._v("#")]),e._v(" 3.2. macOS")]),e._v(" "),o("ol",[o("li",[e._v("Download the latest version of "),o("a",{attrs:{href:"https://dl.google.com/android/repository/platform-tools-latest-darwin.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android SDK Platform-Tools"),o("OutboundLink")],1),e._v(" for macOS")]),e._v(" "),o("li",[e._v("Extract the contents of the zip file into a directory by clicking on it. After that, navigate to that directory using "),o("em",[e._v("Finder")]),e._v(" and locate "),o("code",[e._v("adb")])]),e._v(" "),o("li",[e._v("Open "),o("strong",[e._v("Terminal")]),e._v(" using "),o("em",[e._v("Launchpad")]),e._v(" or "),o("em",[e._v("Spotlight")]),e._v(" and drag-and-drop "),o("code",[e._v("adb")]),e._v(" from the "),o("em",[e._v("Finder")]),e._v(" window into the "),o("em",[e._v("Terminal")]),e._v(" window. Do not close the "),o("em",[e._v("Terminal")]),e._v(" window yet")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Tip")]),e._v(" "),o("p",[e._v("If you are not afraid to use command line, here's a one liner:")]),e._v(" "),o("div",{staticClass:"language-sh line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/Downloads "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -o platform-tools.zip -L https://dl.google.com/android/repository/platform-tools-latest-darwin.zip "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("unzip")]),e._v(" platform-tools.zip "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" platform-tools.zip "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" platform-tools\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("p",[e._v("After that, you can simply type "),o("code",[e._v("./adb")]),e._v(" in the in same "),o("em",[e._v("Terminal")]),e._v(" window to access ADB.")])]),e._v(" "),o("h3",{attrs:{id:"_3-3-linux"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-linux"}},[e._v("#")]),e._v(" 3.3. Linux")]),e._v(" "),o("ol",[o("li",[e._v("Open your favourite terminal emulator. In most GUI-distros, you can open it by holding "),o("code",[e._v("Control")]),e._v(", "),o("code",[e._v("Alter")]),e._v(" and "),o("code",[e._v("T")]),e._v(" at the same time")]),e._v(" "),o("li",[e._v("Run the following command:")])]),e._v(" "),o("div",{staticClass:"language-sh line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/Downloads "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -o platform-tools.zip -L https://dl.google.com/android/repository/platform-tools-latest-linux.zip "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("unzip")]),e._v(" platform-tools.zip "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" platform-tools.zip "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" platform-tools\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("ol",{attrs:{start:"3"}},[o("li",[e._v("If it is successful, you can simply type "),o("code",[e._v("./adb")]),e._v(" in the in "),o("em",[e._v("same")]),e._v(" terminal emulator window or type "),o("code",[e._v("~/Downloads/platform-tools/adb")]),e._v(" in any terminal emulator to access ADB.")])]),e._v(" "),o("h2",{attrs:{id:"_4-configure-adb-over-tcp"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-configure-adb-over-tcp"}},[e._v("#")]),e._v(" 4. Configure ADB over TCP")]),e._v(" "),o("h3",{attrs:{id:"_4-1-lineage-os"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-lineage-os"}},[e._v("#")]),e._v(" 4.1. Lineage OS")]),e._v(" "),o("p",[e._v("Lineage OS (or its derivatives) users can directly enable ADB over TCP using the developer options. To enable that, go to the "),o("strong",[e._v("Developer options")]),e._v(", scroll down until you find "),o("strong",[e._v("ADB over Network")]),e._v(". Now, use the toggle button on the right hand side to enable it and proceed to "),o("a",{attrs:{href:"#_4-3-enable-adb-mode-on-app-manager"}},[e._v("section 4.3")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"_4-2-enable-adb-over-tcp-via-pc-or-mac"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-enable-adb-over-tcp-via-pc-or-mac"}},[e._v("#")]),e._v(" 4.2. Enable ADB over TCP via PC or Mac")]),e._v(" "),o("p",[e._v("For other ROMs, you can do this using the command prompt/PowerShell/terminal emulator that you've opened in the step 3 of the previous section. In this section, I will use "),o("code",[e._v("adb")]),e._v(" to denote "),o("code",[e._v("./adb")]),e._v(", "),o("code",[e._v("adb")]),e._v(" or any other command that you needed to use based on your platform and software in the previous section.")]),e._v(" "),o("ol",[o("li",[e._v("Connect you device to your PC or Mac using a USB cable. For some devices, it is necessary to turn on "),o("em",[e._v("File transfer mode (MTP)")]),e._v(" as well")]),e._v(" "),o("li",[e._v("To confirm that everything is working as expected, type "),o("code",[e._v("adb devices")]),e._v(" in your terminal. If your device is connected successfully, you will see something like this:"),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("List of devices attached\nxxxxxxxx  device\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br"),o("span",{staticClass:"line-number"},[e._v("2")]),o("br")])]),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Notice")]),e._v(" "),o("p",[e._v("In some Android phones, an alert prompt will be appeared with a message "),o("strong",[e._v("Allow USB Debugging")]),e._v(" in which case, check "),o("em",[e._v("Always allow from this computer")]),e._v(" and click "),o("strong",[e._v("Allow")]),e._v(".")])])]),e._v(" "),o("li",[e._v("Finally, run the following command to enable ADB over TCP:"),o("div",{staticClass:"language-sh line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[e._v("adb tcpip "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("5555")]),e._v("\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("div",{staticClass:"custom-block danger"},[o("p",{staticClass:"custom-block-title"},[e._v("Danger")]),e._v(" "),o("p",[e._v("You cannot disable developer options or USB debugging after enabling ADB over TCP.")])])])]),e._v(" "),o("h3",{attrs:{id:"_4-3-enable-adb-mode-on-app-manager"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-enable-adb-mode-on-app-manager"}},[e._v("#")]),e._v(" 4.3. Enable ADB mode on App Manager")]),e._v(" "),o("p",[e._v("After enabling ADB over TCP (in the previous subsections), open App Manager (AM). You should see "),o("strong",[e._v("working on ADB mode")]),e._v(" toast message at the bottom. If not, remove AM from the recents and open AM again from the launcher. If you see the toast message, you can safely "),o("a",{attrs:{href:"#_4-4-stop-adb-over-tcp"}},[e._v("stop ADB over TCP")]),e._v(".")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Notice")]),e._v(" "),o("p",[e._v("In some Android phones, the USB cable may need to be connected or disconnected from the PC in order for it to work.")])]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("Warning")]),e._v(" "),o("p",[e._v("ADB over TCP will be disabled after a restart. In that case, you have to follow "),o("a",{attrs:{href:"#_4-2-enable-adb-over-tcp-via-pc-or-mac"}},[e._v("section 4.2")]),e._v(" again.")])]),e._v(" "),o("h3",{attrs:{id:"_4-4-stop-adb-over-tcp"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-stop-adb-over-tcp"}},[e._v("#")]),e._v(" 4.4. Stop ADB over TCP")]),e._v(" "),o("p",[e._v("In order to ensure device security, you should stop ADB over TCP right after AM detects it. To do that, connect your device to your PC or Mac and run the following command:")]),e._v(" "),o("div",{staticClass:"language-sh line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[e._v("adb kill-server\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("p",[e._v("Replace "),o("code",[e._v("adb")]),e._v(" with "),o("code",[e._v("./adb")]),e._v(" or any other command that you had to use in previous steps.")]),e._v(" "),o("p",[e._v("For lineage OS, you can turn off "),o("strong",[e._v("ADB over Network")]),e._v(" in developer options.")]),e._v(" "),o("h2",{attrs:{id:"_5-references"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_5-references"}},[e._v("#")]),e._v(" 5. References")]),e._v(" "),o("ol",[o("li",[o("a",{attrs:{href:"https://www.xda-developers.com/install-adb-windows-macos-linux",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Install ADB on Windows, macOS, and Linux"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://developer.android.com/studio/command-line/adb",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android Debug Bridge (adb)"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.syncios.com/android/fix-usb-debugging-grey-out.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to fix USB debugging greyed out?"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);