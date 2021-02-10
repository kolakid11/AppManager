(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{410:function(t,e,r){"use strict";r.r(e);var a=r(25),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"компоненты-приложения"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#компоненты-приложения"}},[t._v("#")]),t._v(" Компоненты приложения")]),t._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[t._v("Таблица содержания")]),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#что-такое-компоненты-приложения"}},[t._v("Что такое компоненты приложения?")])]),r("li",[r("a",{attrs:{href:"#что-такое-трекеры"}},[t._v("Что такое трекеры?")])]),r("li",[r("a",{attrs:{href:"#как-блокируется-трекер-или-другие-компоненты-в-am-каковы-его-ограничения"}},[t._v("Как блокируется трекер или другие компоненты в AM? Каковы его ограничения?")])]),r("li",[r("a",{attrs:{href:"#почему-компоненты-заблокированные-с-помощью-am-не-распознаются-другими-связанными-приложениями"}},[t._v("Почему компоненты, заблокированные с помощью AM, не распознаются другими связанными приложениями?")])]),r("li",[r("a",{attrs:{href:"#сохраняются-ли-в-am-компоненты-приложения-заблокированные-другими-инструментами"}},[t._v("Сохраняются ли в AM компоненты приложения, заблокированные другими инструментами?")])]),r("li",[r("a",{attrs:{href:"#что-бывает-с-компонентами-заблокированными-с-помощью-am-которые-также-заблокированы-другими-утилитами"}},[t._v("Что бывает с компонентами, заблокированными с помощью AM, которые также заблокированы другими утилитами?")])]),r("li",[r("a",{attrs:{href:"#что-такое-глобальная-блокировка-компонентов"}},[t._v("Что такое глобальная блокировка компонентов?")])]),r("li",[r("a",{attrs:{href:"#класс-трекера-и-компоненты-трекера-в-чем-разница"}},[t._v("Класс трекера и компоненты трекера, в чем разница?")])]),r("li",[r("a",{attrs:{href:"#как-разблокировать-компоненты-трекера-заблокированные-с-помощью-операции-в-один-клик-или-пакетных-операции"}},[t._v("Как разблокировать компоненты трекера, заблокированные с помощью Операции в один клик или пакетных операций?")])])])]),r("p")]),t._v(" "),r("h2",{attrs:{id:"что-такое-компоненты-приложения"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#что-такое-компоненты-приложения"}},[t._v("#")]),t._v(" Что такое компоненты приложения?")]),t._v(" "),r("p",[t._v("Активити, службы, широковещательные приемники (также известные как приемники) и поставщики контента (также известные как поставщики) вместе называются компонентами приложения. Технически, все они наследуют класс "),r("code",[t._v("ComponentInfo")]),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"что-такое-трекеры"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#что-такое-трекеры"}},[t._v("#")]),t._v(" Что такое трекеры?")]),t._v(" "),r("p",[r("em",[t._v("Трекер")]),t._v(" — это специальное ключевое слово в AM которое используется для обозначения рекламы или отслеживающего компонента. Она не обозначает количество реальных трекеров, как на странице "),r("RouterLink",{attrs:{to:"/ru/guide/scanner-page.html"}},[t._v("сканера")]),t._v(". Это аналогично компоненту "),r("em",[t._v("трекера")]),t._v(" (в отличие от "),r("em",[t._v("классов трекеров")]),t._v(").")],1),t._v(" "),r("h2",{attrs:{id:"как-блокируется-трекер-или-другие-компоненты-в-am-каковы-его-ограничения"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#как-блокируется-трекер-или-другие-компоненты-в-am-каковы-его-ограничения"}},[t._v("#")]),t._v(" Как блокируется трекер или другие компоненты в AM? Каковы его ограничения?")]),t._v(" "),r("p",[t._v("AM блокирует компоненты приложения (или компоненты трекера) с использованием метода под названием "),r("a",{attrs:{href:"https://carteryagemann.com/pages/android-intent-firewall.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intent Firewall"),r("OutboundLink")],1),t._v(" (IFW), который очень превосходит другие методы, такие как "),r("code",[t._v("pm")]),t._v(", "),r("a",{attrs:{href:"https://github.com/RikkaApps/Shizuku",target:"_blank",rel:"noopener noreferrer"}},[t._v("Shizuku"),r("OutboundLink")],1),t._v(" или любой другой метод, использующий менеджер пакетов для включения или отключения компонентов. Если компонент отключен последними методами, само приложение может обнаружить, что компонент заблокирован и может снова его включить, так как оно имеет полный доступ к своим компонентам. (Множество мошеннических приложений на самом деле пользуются этим, чтобы разблокировать компоненты трекера.) С другой стороны, IFW - это настоящий брандмауэр, и приложение не может определить, присутствует ли блокировка. Оно также не может повторно включить заблокированый компонент никаким образом. AM использует термин "),r("em",[t._v("блокировать")]),t._v(", а не "),r("em",[t._v("отключить")]),t._v(" по этой причине.")]),t._v(" "),r("p",[t._v("Но даже у IFW есть некоторые ограничения, которые в первую очередь касаются системных приложений:")]),t._v(" "),r("ul",[r("li",[t._v("Соответствующее приложение внесено системой в белый список, т.е. система не может работать должным образом без этих приложений, и это может вызвать случайные сбои. Эти приложения включают, но не ограничиваются системой Android, системным интерфейсом, телефонными службами. Они будут запущены, даже если вы отключите их или заблокируете их компоненты через IFW.")]),t._v(" "),r("li",[t._v("Другое системное приложение или системный процесс вызывает конкретный компонент приложения через межпроцессное взаимодействие (IPC). В этом случае компонент будет активирован, независимо от его присутствия в правилах IFW, или даже если будет отключено всё приложение. Если у вас есть такие системные приложения, единственный способ запретить их работу - избавиться от них.")])]),t._v(" "),r("h2",{attrs:{id:"почему-компоненты-заблокированные-с-помощью-am-не-распознаются-другими-связанными-приложениями"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#почему-компоненты-заблокированные-с-помощью-am-не-распознаются-другими-связанными-приложениями"}},[t._v("#")]),t._v(" Почему компоненты, заблокированные с помощью AM, не распознаются другими связанными приложениями?")]),t._v(" "),r("p",[t._v("Это происходит из-за метода блокировки, который я использую. Этот метод называется "),r("a",{attrs:{href:"https://carteryagemann.com/pages/android-intent-firewall.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intent Firewall"),r("OutboundLink")],1),t._v(" (IFW) и он совместим с "),r("a",{attrs:{href:"https://github.com/tuyafeng/Watt",target:"_blank",rel:"noopener noreferrer"}},[t._v("Watt"),r("OutboundLink")],1),t._v(" и "),r("a",{attrs:{href:"https://github.com/lihenggui/blocker",target:"_blank",rel:"noopener noreferrer"}},[t._v("Blocker"),r("OutboundLink")],1),t._v(". "),r("a",{attrs:{href:"https://www.myandroidtools.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("MyAndroidTool"),r("OutboundLink")],1),t._v(" (MAT) поддерживает IFW, но использует другой формат. Поэтому Watt по умолчанию может обнаружить заблокированные компоненты, а Blocker может их обнаружить, только если вы включите IFW на странице настроек. MAT не может обнаружить правила блокировки AM, так как формат различен. AM не может определить правила MAT, если IFW включен в MAT. В этом случае вы можете импортировать их из "),r("RouterLink",{attrs:{to:"/ru/guide/settings-page.html#импортирование-существующих-правиn"}},[t._v("страницы «Настройки»")]),t._v(". МАТ имеет опцию экспорта, но она не поддерживается из-за ее несвободного характера.")],1),t._v(" "),r("h2",{attrs:{id:"сохраняются-ли-в-am-компоненты-приложения-заблокированные-другими-инструментами"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#сохраняются-ли-в-am-компоненты-приложения-заблокированные-другими-инструментами"}},[t._v("#")]),t._v(" Сохраняются ли в AM компоненты приложения, заблокированные другими инструментами?")]),t._v(" "),r("p",[r("strong",[t._v("Нет.")]),t._v(" Но компоненты, заблокированные системой Android или любыми другими инструментами, отображаются на странице "),r("RouterLink",{attrs:{to:"/ru/guide/app-details-page.html#цветовые-коды"}},[t._v("«Сведения о приложении»")]),t._v(" (во вкладке компонентов). Начиная с версии 2.5.12, вы можете импортировать эти правила в "),r("RouterLink",{attrs:{to:"/ru/guide/settings-page.html#импортирование-существующих-правиn"}},[t._v("настройках приложения")]),t._v(". Но поскольку нет возможности отличить компоненты, заблокированные сторонними приложениями, от компонентов, заблокированных системой, вы должны быть очень осторожны при выборе приложения.")],1),t._v(" "),r("h2",{attrs:{id:"что-бывает-с-компонентами-заблокированными-с-помощью-am-которые-также-заблокированы-другими-утилитами"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#что-бывает-с-компонентами-заблокированными-с-помощью-am-которые-также-заблокированы-другими-утилитами"}},[t._v("#")]),t._v(" Что бывает с компонентами, заблокированными с помощью AM, которые также заблокированы другими утилитами?")]),t._v(" "),r("p",[t._v("AM повторно блокирует компоненты, используя "),r("a",{attrs:{href:"https://carteryagemann.com/pages/android-intent-firewall.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intent Firewall"),r("OutboundLink")],1),t._v(" (IFW). Они не будут разблокированы и снова заблокированы (если заблокированы с помощью метода "),r("em",[t._v("pm")]),t._v(" или "),r("a",{attrs:{href:"https://github.com/RikkaApps/Shizuku",target:"_blank",rel:"noopener noreferrer"}},[t._v("Shizuku"),r("OutboundLink")],1),t._v("). Но если вы разблокируете компонент на странице "),r("RouterLink",{attrs:{to:"/ru/guide/app-details-page.html"}},[t._v("Сведения о приложении")]),t._v(", он будет возвращен в состояние по умолчанию - заблокирован или разблокирован, как описано в соответствующем манифесте приложения - с использованием как IFW, так и метода "),r("em",[t._v("pm")]),t._v(". Однако компоненты, заблокированные с помощью "),r("a",{attrs:{href:"https://www.myandroidtools.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("MyAndroidTools"),r("OutboundLink")],1),t._v(" (MAT) методом IFW не будет разблокирован AM. Чтобы решить эту проблему, вы можете сначала импортировать соответствующую конфигурацию в "),r("RouterLink",{attrs:{to:"/ru/guide/settings-page.html#импортирование-существующих-правиn"}},[t._v("настройках AM")]),t._v(". В этом случае конфигурации MAT будут удалены. Однако эта опция доступна только с версии 2.5.12.")],1),t._v(" "),r("h2",{attrs:{id:"что-такое-глобальная-блокировка-компонентов"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#что-такое-глобальная-блокировка-компонентов"}},[t._v("#")]),t._v(" Что такое глобальная блокировка компонентов?")]),t._v(" "),r("p",[t._v("Когда вы блокируете компонент на странице "),r("RouterLink",{attrs:{to:"/ru/guide/app-details-page.html"}},[t._v("«Сведения о приложении»")]),t._v(", блокировка не применяется по умолчанию. Применяется она только тогда, когда вы применяете блокировку с помощью опции "),r("em",[t._v("применить правила")]),t._v(" в правом верхнем меню. Если вы включите "),r("em",[t._v("глобальную блокировку компонентов")]),t._v(", блокировка будет применена, как только вы заблокируете компонент. Однако, если вы решите заблокировать компоненты трекера, блокировка применяется автоматически независимо от этого параметра. Вы также можете снять блокировку приложения, просто нажав на "),r("em",[t._v("удалить правила")]),t._v(" в том же меню на странице "),r("strong",[t._v("«Сведения о приложении»")]),t._v(". Поскольку поведение по умолчанию дает вам больший контроль над приложениями, лучше оставить "),r("em",[t._v("глобальную блокировку компонентов")]),t._v(" выключенной.")],1),t._v(" "),r("p",[r("em",[t._v("Смотрите также: "),r("RouterLink",{attrs:{to:"/ru/guide/settings-page.html#гnобаnьная-бnокировка-компонентов"}},[t._v("Глобальная блокировка компонентов")])],1)]),t._v(" "),r("h2",{attrs:{id:"класс-трекера-и-компоненты-трекера-в-чем-разница"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#класс-трекера-и-компоненты-трекера-в-чем-разница"}},[t._v("#")]),t._v(" Класс трекера и компоненты трекера, в чем разница?")]),t._v(" "),r("p",[t._v("Все компоненты приложения являются классами, но не все классы являются компонентами. По сути, лишь несколько классов являются компонентами. При этом "),r("RouterLink",{attrs:{to:"/ru/guide/scanner-page.html"}},[t._v("страница сканера")]),t._v(" отображает список трекеров вместе с количеством классов, а не только компоненты. На всех других страницах трекеры и компоненты трекера используются как синонимы для обозначения компонентов трекера, то есть блокируются компоненты трекера, а не классы трекера.")],1),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("Информация")]),t._v(" "),r("p",[t._v("Классы трекера не могут быть заблокированы. Они могут быть удалены только редактированием самого приложения.")])]),t._v(" "),r("h2",{attrs:{id:"как-разблокировать-компоненты-трекера-заблокированные-с-помощью-операции-в-один-клик-или-пакетных-операции"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#как-разблокировать-компоненты-трекера-заблокированные-с-помощью-операции-в-один-клик-или-пакетных-операции"}},[t._v("#")]),t._v(" Как разблокировать компоненты трекера, заблокированные с помощью Операции в один клик или пакетных операций?")]),t._v(" "),r("p",[t._v("Некоторые приложения могут работать некорректно из-за их зависимости от компонентов трекера, заблокированных с помощью AM. Начиная с версии 2.5.12, есть возможность разблокировать компоненты трекеров на странице "),r("RouterLink",{attrs:{to:"/ru/guide/one-click-ops-page.html"}},[t._v("«Операции в один клик»")]),t._v(". Однако в предыдущих версиях таких вариантов нет. Чтобы разблокировать эти компоненты трекера, сначала перейдите на страницу "),r("RouterLink",{attrs:{to:"/ru/guide/app-details-page.html"}},[t._v("«Сведения о приложении»")]),t._v(" некорректно функционирующего приложения. Затем переключитесь на вкладку "),r("em",[t._v("активити")]),t._v(", нажмите на кнопку "),r("em",[t._v("удалить правила")]),t._v(" в верхнем правом меню. Все правила блокировки, относящиеся к компонентам приложения, будут немедленно удалены. В качестве альтернативы, если вы нашли компонент, вызывающий проблему, вы можете разблокировать компонент, нажав на кнопку "),r("em",[t._v("разблокировать")]),t._v(" рядом с названием компонента. Если вы включили "),r("em",[t._v("глобальную блокировку компонентов")]),t._v(" в настройках приложения, сначала отключите ее, так как кнопка "),r("em",[t._v("Удалить правила")]),t._v(" не будет отображаться, когда блокировка включена.")],1),t._v(" "),r("p",[t._v("Если на вашем устройстве установлены "),r("strong",[t._v("Сервисы Google Play")]),t._v(" ("),r("code",[t._v("com.google.android.gms")]),t._v("), разблокировка следующих "),r("RouterLink",{attrs:{to:"/ru/guide/app-details-page.html#сnужбы"}},[t._v("служб")]),t._v(" может решить проблему:")],1),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Ad Request Broker Service")]),r("br"),t._v(" "),r("code",[t._v(".ads.AdRequestBrokerService")])]),t._v(" "),r("li",[r("strong",[t._v("Cache Broker Service")]),r("br"),t._v(" "),r("code",[t._v(".ads.cache.CacheBrokerService")])]),t._v(" "),r("li",[r("strong",[t._v("Gservices Value Broker Service")]),r("br"),t._v(" "),r("code",[t._v(".ads.GservicesValueBrokerService")])]),t._v(" "),r("li",[r("strong",[t._v("Advertising Id Notification Service")]),r("br"),t._v(" "),r("code",[t._v(".ads.identifier.service.AdvertisingIdNotificationService")])]),t._v(" "),r("li",[r("strong",[t._v("Advertising Id Service")]),r("br"),t._v(" "),r("code",[t._v(".ads.identifier.service.AdvertisingIdService")])])])])}),[],!1,null,null,null);e.default=v.exports}}]);