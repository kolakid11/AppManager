(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{412:function(a,t,s){"use strict";s.r(t);var _=s(25),r=Object(_.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"adb-через-tcp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adb-через-tcp"}},[a._v("#")]),a._v(" ADB через TCP")]),a._v(" "),s("p",[a._v("Многие функции, доступные только в режиме root можно использовать, включив ADB через TCP. Для этого потребуется ПК или Mac с установленными инструментами платформы Android и сам смартфон с включенными параметрами для разработчиков, а также должна быть активна опция «Отладка по USB».")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("Подсказка для root пользователей")]),a._v(" "),s("p",[a._v("Если права суперпользователя предоставлены App Manager, оно уже может выполнить привилегированный код без каких-либо проблем. "),s("strong",[a._v("Поэтому root пользователям не нужно включать ADB через TCP.")]),a._v(" Если вы все еще хотите использовать ADB по TCP, вы должны отозвать права суперпользователя для App Manager и перезагрузить устройство. Вы можете увидеть сообщение "),s("em",[a._v("«работа в режиме ADB»")]),a._v(" без перезапуска, но это не совсем так. Сервер (используемый как интерфейс между системой и App Manager) все еще работает в режиме root. Это известная проблема, и она будет исправлена в будущей версии App Manager.")])]),a._v(" "),s("p",[s("em",[a._v("Смотрите также: "),s("RouterLink",{attrs:{to:"/ru/faq/adb.html"}},[a._v("FAQ: ADB через TCP")])],1)]),a._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[a._v("Таблица содержания")]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1-включение-параметров-для-разработчиков"}},[a._v("1. Включение параметров для разработчиков")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1-1-расположение-параметров-для-разработчиков"}},[a._v("1.1. Расположение параметров для разработчиков")])]),s("li",[s("a",{attrs:{href:"#_1-2-как-включить-параметры-для-разработчиков"}},[a._v("1.2. Как включить параметры для разработчиков")])])])]),s("li",[s("a",{attrs:{href:"#_2-включение-отладки-по-usb"}},[a._v("2. Включение отладки по USB")]),s("ul",[s("li",[s("a",{attrs:{href:"#_2-1-xiaomi-miui"}},[a._v("2.1. Xiaomi (MIUI)")])]),s("li",[s("a",{attrs:{href:"#_2-2-huawei-emui"}},[a._v("2.2. Huawei (EMUI)")])]),s("li",[s("a",{attrs:{href:"#_2-3-lg"}},[a._v("2.3. LG")])]),s("li",[s("a",{attrs:{href:"#_2-4-исправление-проблем"}},[a._v("2.4. Исправление проблем")])])])]),s("li",[s("a",{attrs:{href:"#_3-настроика-adb-на-пк-или-mac"}},[a._v("3. Настройка ADB на ПК или Mac")]),s("ul",[s("li",[s("a",{attrs:{href:"#_3-1-windows"}},[a._v("3.1. Windows")])]),s("li",[s("a",{attrs:{href:"#_3-2-macos"}},[a._v("3.2. macOS")])]),s("li",[s("a",{attrs:{href:"#_3-3-linux"}},[a._v("3.3. Linux")])])])]),s("li",[s("a",{attrs:{href:"#_4-настроика-adb-через-tcp"}},[a._v("4. Настройка ADB через TCP")]),s("ul",[s("li",[s("a",{attrs:{href:"#_4-1-lineage-os"}},[a._v("4.1. Lineage OS")])]),s("li",[s("a",{attrs:{href:"#_4-2-включение-adb-через-tcp-через-пк-или-mac"}},[a._v("4.2. Включение ADB через TCP через ПК или Mac")])]),s("li",[s("a",{attrs:{href:"#_4-3-включение-режима-adb-в-app-manager"}},[a._v("4.3. Включение режима ADB в App Manager")])]),s("li",[s("a",{attrs:{href:"#_4-4-остановка-adb-через-tcp"}},[a._v("4.4. Остановка ADB через TCP")])])])]),s("li",[s("a",{attrs:{href:"#_5-ссылки"}},[a._v("5. Ссылки")])])])]),s("p")]),a._v(" "),s("h2",{attrs:{id:"_1-включение-параметров-для-разработчиков"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-включение-параметров-для-разработчиков"}},[a._v("#")]),a._v(" 1. Включение параметров для разработчиков")]),a._v(" "),s("h3",{attrs:{id:"_1-1-расположение-параметров-для-разработчиков"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-расположение-параметров-для-разработчиков"}},[a._v("#")]),a._v(" 1.1. Расположение параметров для разработчиков")]),a._v(" "),s("p",[s("strong",[a._v("Параметры для разработчиков")]),a._v(" расположены в "),s("strong",[a._v("настройках")]),a._v(" Android, либо непосредственно в нижней части страницы (в большинстве прошивок), либо под некоторыми другими настройками, такими как "),s("strong",[a._v("«Система»")]),a._v(" (Lineage OS, Asus Zenfone 8.0+), "),s("strong",[a._v("«Система»")]),a._v(" > "),s("strong",[a._v("«Дополнительно»")]),a._v(" (Google Pixel), "),s("strong",[a._v("«Расширенные настройки»")]),a._v(" (Xiaomi MIUI, Oppo ColorOS), "),s("strong",[a._v("«Другие настройки»")]),a._v(" (Vivo FuntouchOS), "),s("strong",[a._v("«Другие»")]),a._v(" (ZTE Nubia). В отличие от других параметров, они не отображается, пока пользователь не включит их. Если параметры для разработчиков включены, вы можете использовать поле поиска в "),s("strong",[a._v("настройках")]),a._v(" Android, чтобы находить их.")]),a._v(" "),s("h3",{attrs:{id:"_1-2-как-включить-параметры-для-разработчиков"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-как-включить-параметры-для-разработчиков"}},[a._v("#")]),a._v(" 1.2. Как включить параметры для разработчиков")]),a._v(" "),s("p",[a._v("Эта опция доступна в "),s("strong",[a._v("настройках")]),a._v(" Android, но, как и расположение параметров для разработчиков, ее расположение отличается в зависимости от устройства. Необходимо найти пункт "),s("strong",[a._v("«Версия сборки»")]),a._v(" (или "),s("strong",[a._v("«Версия MIUI»")]),a._v(" на прошивках MIUI или "),s("strong",[a._v("«Версия ПО»")]),a._v(" в FuntouchOS, "),s("strong",[a._v("«Версия»")]),a._v(" в ColorOS) и нажать на этот пункт не менее 7 раз, пока не появится сообщение "),s("em",[a._v("«Вы стали разработчиком!»")]),a._v(" (на этом этапе система может потребовать от вас ввести код блокировки экрана). На большинстве устройств он находится внизу страницы настроек, в разделе "),s("strong",[a._v("«О телефоне»")]),a._v(". Но лучший способ найти его – воспользоваться окном поиска.")]),a._v(" "),s("h2",{attrs:{id:"_2-включение-отладки-по-usb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-включение-отладки-по-usb"}},[a._v("#")]),a._v(" 2. Включение отладки по USB")]),a._v(" "),s("p",[a._v("После того, как вы "),s("a",{attrs:{href:"#_1-1-%D1%80%D0%B0%D1%81%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%B2-%D0%B4%D0%BB%D1%8F-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D0%BE%D0%B2"}},[a._v("нашли меню параметров для разработчиков")]),a._v(", включите "),s("strong",[a._v("параметры для разработчиков")]),a._v(" (если они не включены). После этого прокрутите немного вниз, пока не найдете опцию "),s("strong",[a._v("«Отладка по USB»")]),a._v(". Используйте переключатель справа, чтобы включить ее. На этом этапе вы можете получить предупреждение, в котором вам, возможно, придется нажать "),s("em",[a._v("OK")]),a._v(", чтобы включить ее. Вам также может потребоваться включить некоторые другие параметры в зависимости от надстройки устройства и прошивки. Вот некоторые примеры:")]),a._v(" "),s("h3",{attrs:{id:"_2-1-xiaomi-miui"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-xiaomi-miui"}},[a._v("#")]),a._v(" 2.1. Xiaomi (MIUI)")]),a._v(" "),s("p",[a._v("Включите также "),s("strong",[a._v("отладку по USB (настройки безопасности)")]),a._v(".")]),a._v(" "),s("h3",{attrs:{id:"_2-2-huawei-emui"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-huawei-emui"}},[a._v("#")]),a._v(" 2.2. Huawei (EMUI)")]),a._v(" "),s("p",[a._v("Включите также "),s("strong",[a._v("отладку по ADB только в режиме зарядки")]),a._v(". При подключении к ПК или Mac вы можете получить сообщение "),s("strong",[a._v("«Разрешить доступ к данным устройства?»")]),a._v(", в котором нужно нажать "),s("strong",[a._v("«ДА, РАЗРЕШИТЬ ДОСТУП»")]),a._v(".")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("Примечание")]),a._v(" "),s("p",[a._v("Часто режим "),s("strong",[a._v("отладки по USB")]),a._v(" может быть отключен системой автоматически. В таком случае повторите описанную выше процедуру.")])]),a._v(" "),s("h3",{attrs:{id:"_2-3-lg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-lg"}},[a._v("#")]),a._v(" 2.3. LG")]),a._v(" "),s("p",[a._v("Убедитесь, что у вас включена опция "),s("strong",[a._v("«USB-модем»")]),a._v(".")]),a._v(" "),s("h3",{attrs:{id:"_2-4-исправление-проблем"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-исправление-проблем"}},[a._v("#")]),a._v(" 2.4. Исправление проблем")]),a._v(" "),s("p",[a._v("В случае, если "),s("strong",[a._v("отладка по USB")]),a._v(" неактивна, вы можете сделать следующее:")]),a._v(" "),s("ol",[s("li",[a._v("Убедитесь, что вы включили отладку по USB, прежде чем подключать телефон к ПК или Mac через USB-кабель")]),a._v(" "),s("li",[a._v("Включите USB-модем после подключения к ПК или Mac через USB-кабель")]),a._v(" "),s("li",[a._v("[Для устройств Samsung] Если на вашем устройстве работает KNOX, возможно, вам придется выполнить некоторые дополнительные действия. Ознакомьтесь с официальной документацией или обратитесь в службу поддержки для получения дополнительной справки")])]),a._v(" "),s("h2",{attrs:{id:"_3-настроика-adb-на-пк-или-mac"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-настроика-adb-на-пк-или-mac"}},[a._v("#")]),a._v(" 3. Настройка ADB на ПК или Mac")]),a._v(" "),s("p",[a._v("Чтобы включить ADB через TCP, вам необходимо настроить ADB на вашем ПК или Mac. "),s("strong",[s("em",[a._v("Пользователи Lineage OS могут перейти к "),s("a",{attrs:{href:"#_4-1-lineage-os"}},[a._v("пункту 4.1")]),a._v(".")])])]),a._v(" "),s("h3",{attrs:{id:"_3-1-windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-windows"}},[a._v("#")]),a._v(" 3.1. Windows")]),a._v(" "),s("ol",[s("li",[a._v("Скачайте последнюю версию "),s("a",{attrs:{href:"https://dl.google.com/android/repository/platform-tools-latest-windows.zip",target:"_blank",rel:"noopener noreferrer"}},[a._v("Android SDK Platform-Tools"),s("OutboundLink")],1),a._v(" для Windows")]),a._v(" "),s("li",[a._v("Распакуйте содержимое ZIP-файла в любой каталог (например, "),s("code",[a._v("C:\\adb")]),a._v(") и перейдите в этот каталог, используя "),s("em",[a._v("файловый проводник")])]),a._v(" "),s("li",[a._v("Откройте "),s("strong",[a._v("командную строку")]),a._v(" или "),s("strong",[a._v("PowerShell")]),a._v(" из этого каталога. Вы можете сделать это вручную из меню «Пуск» или удерживая клавишу "),s("code",[a._v("Shift")]),a._v(" и щелкнув правой кнопкой мыши в каталоге в "),s("em",[a._v("проводнике")]),a._v(", а затем нажав на "),s("em",[a._v("«Открыть строку команд»")]),a._v(" или "),s("em",[a._v("«Открыть окно PowerShell")]),a._v(" (в зависимости от того, что у вас установлено). Теперь вы можете получить доступ к ADB, набрав "),s("code",[a._v("adb")]),a._v(" (в командной строке) или "),s("code",[a._v("./adb")]),a._v(" (в PowerShell). Не закрывайте пока что это окно")])]),a._v(" "),s("h3",{attrs:{id:"_3-2-macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-macos"}},[a._v("#")]),a._v(" 3.2. macOS")]),a._v(" "),s("ol",[s("li",[a._v("Скачайте последнюю версию "),s("a",{attrs:{href:"https://dl.google.com/android/repository/platform-tools-latest-darwin.zip",target:"_blank",rel:"noopener noreferrer"}},[a._v("Android SDK Platform-Tools"),s("OutboundLink")],1),a._v(" для macOS")]),a._v(" "),s("li",[a._v("Распакуйте содержимое ZIP-файла в каталог, щелкнув по нему. После этого перейдите в этот каталог, используя "),s("em",[a._v("Finder")]),a._v(" и найдите "),s("code",[a._v("adb")])]),a._v(" "),s("li",[a._v("Откройте "),s("strong",[a._v("терминал")]),a._v(", используя "),s("em",[a._v("Launchpad")]),a._v(" или "),s("em",[a._v("Spotlight")]),a._v(" и перетащите "),s("code",[a._v("adb")]),a._v(" из окна "),s("em",[a._v("Finder")]),a._v(" в окно "),s("em",[a._v("терминала")]),a._v(". Не закрывайте пока что окно "),s("em",[a._v("терминала")])])]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("Подсказка")]),a._v(" "),s("p",[a._v("Если вы не боитесь использовать командную строку, вот одна строка:")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/Downloads "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -o platform-tools.zip -L https://dl.google.com/android/repository/platform-tools-latest-darwin.zip "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" platform-tools.zip "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" platform-tools.zip "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" platform-tools\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("После этого вы можете просто ввести команду "),s("code",[a._v("./adb")]),a._v(" в том же окне "),s("em",[a._v("терминала")]),a._v(" для доступа к ADB.")])]),a._v(" "),s("h3",{attrs:{id:"_3-3-linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-linux"}},[a._v("#")]),a._v(" 3.3. Linux")]),a._v(" "),s("ol",[s("li",[a._v("Откройте свой любимый эмулятор терминала. В большинстве GUI-дистрибутивов вы можете открыть его, удерживая одновременно клавиши "),s("code",[a._v("Control")]),a._v(", "),s("code",[a._v("Alter")]),a._v(" и "),s("code",[a._v("T")])]),a._v(" "),s("li",[a._v("Выполните следующую команду:")])]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/Downloads "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -o platform-tools.zip -L https://dl.google.com/android/repository/platform-tools-latest-linux.zip "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" platform-tools.zip "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" platform-tools.zip "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" platform-tools\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[a._v("В случае успеха, вы можете просто ввести "),s("code",[a._v("./adb")]),a._v(" в "),s("em",[a._v("том же окне")]),a._v(" эмулятора терминала или ввести "),s("code",[a._v("~/Downloads/platform-tools/adb")]),a._v(" в любом эмуляторе терминала для ADB.")])]),a._v(" "),s("h2",{attrs:{id:"_4-настроика-adb-через-tcp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-настроика-adb-через-tcp"}},[a._v("#")]),a._v(" 4. Настройка ADB через TCP")]),a._v(" "),s("h3",{attrs:{id:"_4-1-lineage-os"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-lineage-os"}},[a._v("#")]),a._v(" 4.1. Lineage OS")]),a._v(" "),s("p",[a._v("Пользователи ОС Lineage (или ее производных) могут напрямую включить ADB через TCP, используя параметры для разработчиков. Чтобы это сделать, перейдите в меню "),s("strong",[a._v("«Для разработчиков»")]),a._v(", прокрутите вниз, пока не найдете "),s("strong",[a._v("«ADB по сети»")]),a._v(". Теперь используйте переключатель с правой стороны, чтобы включить его, и перейдите к "),s("a",{attrs:{href:"#_4-3-%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D1%80%D0%B5%D0%B6%D0%B8%D0%BC%D0%B0-adb-%D0%B2-app-manager"}},[a._v("пункту 4.3")]),a._v(".")]),a._v(" "),s("h3",{attrs:{id:"_4-2-включение-adb-через-tcp-через-пк-или-mac"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-включение-adb-через-tcp-через-пк-или-mac"}},[a._v("#")]),a._v(" 4.2. Включение ADB через TCP через ПК или Mac")]),a._v(" "),s("p",[a._v("На других прошивках вы можете сделать это с помощью командной строки/PowerShell/эмулятора терминала, который вы открыли на шаге 3 предыдущего раздела. В этом разделе я буду использовать "),s("code",[a._v("adb")]),a._v(" для обозначения "),s("code",[a._v("./adb")]),a._v(", "),s("code",[a._v("adb")]),a._v(" или любую другую команду, которую вам нужно было использовать в зависимости от вашей платформы и программного обеспечения в предыдущем разделе.")]),a._v(" "),s("ol",[s("li",[a._v("Подключите устройство к ПК или Mac с помощью кабеля USB. Для некоторых устройств необходимо также включить опцию "),s("em",[a._v("«Режим передачи файлов (MTP)»")])]),a._v(" "),s("li",[a._v("Чтобы убедиться, что все работает должным образом, введите "),s("code",[a._v("adb devices")]),a._v(" в вашем терминале. Если ваше устройство подключено правильно, вы увидите что-то вроде этого:"),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("List of devices attached\nxxxxxxxx  device\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("Примечание")]),a._v(" "),s("p",[a._v("В некоторых смартфонах Android появится предупреждение сообщение "),s("strong",[a._v("«Разрешить отладку по USB»")]),a._v(" в котором нужно поставить галочку рядом с "),s("em",[a._v("«Всегда разрешать для этого компьютера»")]),a._v(" и нажать "),s("strong",[a._v("«Разрешить»")]),a._v(".")])])]),a._v(" "),s("li",[a._v("И наконец, выполните следующую команду, чтобы включить ADB через TCP:"),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("adb tcpip "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5555")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[a._v("Предупреждение")]),a._v(" "),s("p",[a._v("Вы не можете отключить параметры для разработчиков или отладку по USB после включения ADB через TCP.")])])])]),a._v(" "),s("h3",{attrs:{id:"_4-3-включение-режима-adb-в-app-manager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-включение-режима-adb-в-app-manager"}},[a._v("#")]),a._v(" 4.3. Включение режима ADB в App Manager")]),a._v(" "),s("p",[a._v("После включения ADB через TCP (в предыдущих подразделах) откройте App Manager (AM). У вас должно появиться всплывающее сообщение "),s("strong",[a._v("«работа режиме ADB»")]),a._v(" внизу. Если нет, закройте AM из списка недавних приложений и запустите снова. Если вы увидите всплывающее сообщение, можете смело "),s("a",{attrs:{href:"#_4-4-%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-adb-%D1%87%D0%B5%D1%80%D0%B5%D0%B7-tcp"}},[a._v("остановить ADB через TCP")]),a._v(".")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("Примечание")]),a._v(" "),s("p",[a._v("На некоторых устройствах Android для этого может потребоваться подключение или отключение кабеля USB от ПК.")])]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("Предупреждение")]),a._v(" "),s("p",[a._v("ADB через TCP будет отключен после перезагрузки. В этом случае вы должны снова следовать "),s("a",{attrs:{href:"#_4-2-%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-adb-%D1%87%D0%B5%D1%80%D0%B5%D0%B7-tcp-%D1%87%D0%B5%D1%80%D0%B5%D0%B7-%D0%BF%D0%BA-%D0%B8%D0%BB%D0%B8-mac"}},[a._v("пункту 4.2")]),a._v(".")])]),a._v(" "),s("h3",{attrs:{id:"_4-4-остановка-adb-через-tcp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-остановка-adb-через-tcp"}},[a._v("#")]),a._v(" 4.4. Остановка ADB через TCP")]),a._v(" "),s("p",[a._v("Чтобы обеспечить безопасность устройства, вы должны остановить ADB через TCP сразу после обнаружения AM. Чтобы это сделать, подключите устройство к ПК или Mac и выполните следующую команду:")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("adb kill-server\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Замените "),s("code",[a._v("adb")]),a._v(" на "),s("code",[a._v("./adb")]),a._v(" или любую другую команду, которую вам приходилось использовать на предыдущих шагах.")]),a._v(" "),s("p",[a._v("Для Lineage OS можно отключить "),s("strong",[a._v("«ADB через сеть»")]),a._v(" в параметрах для разработчиков.")]),a._v(" "),s("h2",{attrs:{id:"_5-ссылки"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-ссылки"}},[a._v("#")]),a._v(" 5. Ссылки")]),a._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://www.xda-developers.com/install-adb-windows-macos-linux",target:"_blank",rel:"noopener noreferrer"}},[a._v("Как установить ADB на Windows, macOS и Linux"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://developer.android.com/studio/command-line/adb",target:"_blank",rel:"noopener noreferrer"}},[a._v("Android Debug Bridge (ADB)"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.syncios.com/android/fix-usb-debugging-grey-out.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Как исправить неактивную отладку по USB?"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);