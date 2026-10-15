[2026-10-15T20:32:37.613Z] [build] npm error gyp ERR! stack at PythonFinder.fail (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/find-python.js:306:11)
[2026-10-15T20:32:37.613Z] [build] npm error gyp ERR! stack at PythonFinder.findPython (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/find-python.js:164:17)
[2026-10-15T20:32:37.613Z] [build] npm error gyp ERR! stack at process.processTicksAndRejections (node:internal/process/task_queues:103:5)
[2026-10-15T20:32:37.613Z] [build] npm error gyp ERR! stack at async configure (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/configure.js:27:18)
[2026-10-15T20:32:37.613Z] [build] npm error gyp ERR! stack at async run (/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js:81:18)
[2026-10-15T20:32:37.613Z] [build] npm error gyp ERR! System Linux 6.8.0-142-generic
[2026-10-15T20:32:37.613Z] [build] npm error gyp ERR! command "/usr/local/bin/node" "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "configure" "--fallback-to-build" "--update-binary" "--module=/build/next/node_modules/canvas/build/Release/canvas.node" "--module_name=canvas" "--module_path=/build/next/node_modules/canvas/build/Release" "--napi_version=10" "--node_abi_napi=napi" "--napi_build_version=0" "--node_napi_label=node-v127"
[2026-10-15T20:32:37.613Z] [build] npm error gyp ERR! cwd /build/next/node_modules/canvas
[2026-10-15T20:32:37.613Z] [build] npm error gyp ERR! node -v v22.23.2
[2026-10-15T20:32:37.613Z] [build] npm error gyp ERR! node-gyp -v v11.5.0
[2026-10-15T20:32:37.613Z] [build] npm error gyp ERR! not ok
[2026-10-15T20:32:37.613Z] [build] npm error node-pre-gyp ERR! build error
[2026-10-15T20:32:37.613Z] [build] npm error node-pre-gyp ERR! stack Error: Failed to execute '/usr/local/bin/node /usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js configure --fallback-to-build --update-binary --module=/build/next/node_modules/canvas/build/Release/canvas.node --module_name=canvas --module_path=/build/next/node_modules/canvas/build/Release --napi_version=10 --node_abi_napi=napi --napi_build_version=0 --node_napi_label=node-v127' (1)
[2026-10-15T20:32:37.613Z] [build] npm error node-pre-gyp ERR! stack     at ChildProcess.<anonymous> (/build/next/node_modules/@mapbox/node-pre-gyp/lib/util/compile.js:89:23)
[2026-10-15T20:32:37.613Z] [build] npm error node-pre-gyp ERR! stack     at ChildProcess.emit (node:events:519:28)
[2026-10-15T20:32:37.613Z] [build] npm error node-pre-gyp ERR! stack     at maybeClose (node:internal/child_process:1101:16)
[2026-10-15T20:32:37.613Z] [build] npm error node-pre-gyp ERR! stack     at ChildProcess._handle.onexit (node:internal/child_process:304:5)
[2026-10-15T20:32:37.613Z] [build] npm error node-pre-gyp ERR! System Linux 6.8.0-142-generic
[2026-10-15T20:32:37.613Z] [build] npm error node-pre-gyp ERR! command "/usr/local/bin/node" "/build/next/node_modules/.bin/node-pre-gyp" "install" "--fallback-to-build" "--update-binary"
[2026-10-15T20:32:37.613Z] [build] npm error node-pre-gyp ERR! cwd /build/next/node_modules/canvas
[2026-10-15T20:32:37.613Z] [build] npm error node-pre-gyp ERR! node -v v22.23.2
[2026-10-15T20:32:37.613Z] [build] npm error node-pre-gyp ERR! node-pre-gyp -v v1.0.11
[2026-10-15T20:32:37.613Z] [build] npm error node-pre-gyp ERR! not ok
[2026-10-15T20:32:37.614Z] [build] npm error A complete log of this run can be found in: /build/.npm-cache/_logs/2026-10-15T20_32_11_706Z-debug-0.log
[2026-10-15T20:32:38.140Z] ✖ فشل النشر: فشل تثبيت الحزم — راجع سجلّ البناء
[2026-10-15T20:32:42.811Z] [build] استنساخ karamalturk63-source/A#main …
[2026-10-15T20:32:44.776Z] [build] فحص المستودع …
[2026-10-15T20:32:45.541Z] [build] المستودع سليم (1MB، 30 ملف)
[2026-10-15T20:32:46.521Z] [build] تثبيت الحزم …
[2026-10-15T20:33:02.985Z] [build] npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
[2026-10-15T20:33:03.109Z] [build] npm warn deprecated glob@7.2.3: Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me
[2026-10-15T20:33:03.274Z] [build] npm warn deprecated npmlog@5.0.1: This package is no longer supported.
[2026-10-15T20:33:03.395Z] [build] npm warn deprecated gauge@3.0.2: This package is no longer supported.
[2026-10-15T20:33:03.433Z] [build] npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
[2026-10-15T20:33:03.492Z] [build] npm warn deprecated are-we-there-yet@2.0.0: This package is no longer supported.
[2026-10-15T20:33:04.221Z] [build] npm warn deprecated tar@6.2.1: Old versions of tar are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me
[2026-10-15T20:33:10.791Z] [build] npm error code 1
[2026-10-15T20:33:10.791Z] [build] npm error path /build/next/node_modules/canvas
[2026-10-15T20:33:10.791Z] [build] npm error command failed
[2026-10-15T20:33:10.791Z] [build] npm error command sh -c node-pre-gyp install --fallback-to-build --update-binary
[2026-10-15T20:33:10.794Z] [build] npm error Failed to execute '/usr/local/bin/node /usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js configure --fallback-to-build --update-binary --module=/build/next/node_modules/canvas/build/Release/canvas.node --module_name=canvas --module_path=/build/next/node_modules/canvas/build/Release --napi_version=10 --node_abi_napi=napi --napi_build_version=0 --node_napi_label=node-v127' (1)
[2026-10-15T20:33:10.794Z] [build] npm error node-pre-gyp info it worked if it ends with ok
[2026-10-15T20:33:10.794Z] [build] npm error node-pre-gyp info using node-pre-gyp@1.0.11
[2026-10-15T20:33:10.794Z] [build] npm error node-pre-gyp info using node@22.23.2 | linux | x64
[2026-10-15T20:33:10.794Z] [build] npm error node-pre-gyp http GET https://github.com/Automattic/node-canvas/releases/download/v2.11.2/canvas-v2.11.2-node-v127-linux-glibc-x64.tar.gz
[2026-10-15T20:33:10.794Z] [build] npm error node-pre-gyp ERR! install response status 404 Not Found on https://github.com/Automattic/node-canvas/releases/download/v2.11.2/canvas-v2.11.2-node-v127-linux-glibc-x64.tar.gz
[2026-10-15T20:33:10.794Z] [build] npm error node-pre-gyp WARN Pre-built binaries not installable for canvas@2.11.2 and node@22.23.2 (node-v127 ABI, glibc) (falling back to source compile with node-gyp)
[2026-10-15T20:33:10.794Z] [build] npm error node-pre-gyp WARN Hit error response status 404 Not Found on https://github.com/Automattic/node-canvas/releases/download/v2.11.2/canvas-v2.11.2-node-v127-linux-glibc-x64.tar.gz
[2026-10-15T20:33:10.794Z] [build] npm error gyp info it worked if it ends with ok
[2026-10-15T20:33:10.794Z] [build] npm error gyp info using node-gyp@11.5.0
[2026-10-15T20:33:10.794Z] [build] npm error gyp info using node@22.23.2 | linux | x64
[2026-10-15T20:33:10.794Z] [build] npm error gyp info ok
[2026-10-15T20:33:10.794Z] [build] npm error gyp info it worked if it ends with ok
[2026-10-15T20:33:10.794Z] [build] npm error gyp info using node-gyp@11.5.0
[2026-10-15T20:33:10.794Z] [build] npm error gyp info using node@22.23.2 | linux | x64
[2026-10-15T20:33:10.794Z] [build] npm error gyp ERR! find Python
[2026-10-15T20:33:10.794Z] [build] npm error gyp ERR! find Python Python is not set from command line or npm configuration
[2026-10-15T20:33:10.794Z] [build] npm error gyp ERR! find Python Python is not set from environment variable PYTHON
[2026-10-15T20:33:10.794Z] [build] npm error gyp ERR! find Python checking if "python3" can be used
[2026-10-15T20:33:10.794Z] [build] npm error gyp ERR! find Python - executable path is ""
[2026-10-15T20:33:10.794Z] [build] npm error gyp ERR! find Python - "" could not be run
[2026-10-15T20:33:10.794Z] [build] npm error gyp ERR! find Python checking if "python" can be used
[2026-10-15T20:33:10.794Z] [build] npm error gyp ERR! find Python - executable path is ""
[2026-10-15T20:33:10.794Z] [build] npm error gyp ERR! find Python - "" could not be run
[2026-10-15T20:33:10.794Z] [build] npm error gyp ERR! find Python
[2026-10-15T20:33:10.794Z] [build] npm error gyp ERR! find Python **********************************************************
[2026-10-15T20:33:10.794Z] [build] npm error gyp ERR! find Python You need to install the latest version of Python.
[2026-10-15T20:33:10.794Z] [build] npm error gyp ERR! find Python Node-gyp should be able to find and use Python. If not,
[2026-10-15T20:33:10.794Z] [build] npm error gyp ERR! find Python you can try one of the following options:
[2026-10-15T20:33:10.794Z] [build] npm error gyp ERR! find Python - Use the switch --python="/path/to/pythonexecutable"
[2026-10-15T20:33:10.794Z] [build] npm error gyp ERR! find Python (accepted by both node-gyp and npm)
[2026-10-15T20:33:10.794Z] [build] npm error gyp ERR! find Python - Set the environment variable PYTHON
[2026-10-15T20:33:10.794Z] [build] npm error gyp ERR! find Python - Set the npm configuration variable python:
[2026-10-15T20:33:10.795Z] [build] npm error gyp ERR! find Python npm config set python "/path/to/pythonexecutable"
[2026-10-15T20:33:10.795Z] [build] npm error gyp ERR! find Python For more information consult the documentation at:
[2026-10-15T20:33:10.795Z] [build] npm error gyp ERR! find Python https://github.com/nodejs/node-gyp#installation
[2026-10-15T20:33:10.795Z] [build] npm error gyp ERR! find Python **********************************************************
[2026-10-15T20:33:10.795Z] [build] npm error gyp ERR! find Python
[2026-10-15T20:33:10.795Z] [build] npm error gyp ERR! configure error
[2026-10-15T20:33:10.795Z] [build] npm error gyp ERR! stack Error: Could not find any Python installation to use
[2026-10-15T20:33:10.795Z] [build] npm error gyp ERR! stack at PythonFinder.fail (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/find-python.js:306:11)
[2026-10-15T20:33:10.795Z] [build] npm error gyp ERR! stack at PythonFinder.findPython (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/find-python.js:164:17)
[2026-10-15T20:33:10.795Z] [build] npm error gyp ERR! stack at process.processTicksAndRejections (node:internal/process/task_queues:103:5)
[2026-10-15T20:33:10.795Z] [build] npm error gyp ERR! stack at async configure (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/configure.js:27:18)
[2026-10-15T20:33:10.795Z] [build] npm error gyp ERR! stack at async run (/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js:81:18)
[2026-10-15T20:33:10.795Z] [build] npm error gyp ERR! System Linux 6.8.0-142-generic
[2026-10-15T20:33:10.795Z] [build] npm error gyp ERR! command "/usr/local/bin/node" "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "configure" "--fallback-to-build" "--update-binary" "--module=/build/next/node_modules/canvas/build/Release/canvas.node" "--module_name=canvas" "--module_path=/build/next/node_modules/canvas/build/Release" "--napi_version=10" "--node_abi_napi=napi" "--napi_build_version=0" "--node_napi_label=node-v127"
[2026-10-15T20:33:10.795Z] [build] npm error gyp ERR! cwd /build/next/node_modules/canvas
[2026-10-15T20:33:10.795Z] [build] npm error gyp ERR! node -v v22.23.2
[2026-10-15T20:33:10.795Z] [build] npm error gyp ERR! node-gyp -v v11.5.0
[2026-10-15T20:33:10.795Z] [build] npm error gyp ERR! not ok
[2026-10-15T20:33:10.795Z] [build] npm error node-pre-gyp ERR! build error
[2026-10-15T20:33:10.795Z] [build] npm error node-pre-gyp ERR! stack Error: Failed to execute '/usr/local/bin/node /usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js configure --fallback-to-build --update-binary --module=/build/next/node_modules/canvas/build/Release/canvas.node --module_name=canvas --module_path=/build/next/node_modules/canvas/build/Release --napi_version=10 --node_abi_napi=napi --napi_build_version=0 --node_napi_label=node-v127' (1)
[2026-10-15T20:33:10.795Z] [build] npm error node-pre-gyp ERR! stack     at ChildProcess.<anonymous> (/build/next/node_modules/@mapbox/node-pre-gyp/lib/util/compile.js:89:23)
[2026-10-15T20:33:10.795Z] [build] npm error node-pre-gyp ERR! stack     at ChildProcess.emit (node:events:519:28)
[2026-10-15T20:33:10.795Z] [build] npm error node-pre-gyp ERR! stack     at maybeClose (node:internal/child_process:1101:16)
[2026-10-15T20:33:10.795Z] [build] npm error node-pre-gyp ERR! stack     at ChildProcess._handle.onexit (node:internal/child_process:304:5)
[2026-10-15T20:33:10.795Z] [build] npm error node-pre-gyp ERR! System Linux 6.8.0-142-generic
[2026-10-15T20:33:10.795Z] [build] npm error node-pre-gyp ERR! command "/usr/local/bin/node" "/build/next/node_modules/.bin/node-pre-gyp" "install" "--fallback-to-build" "--update-binary"
[2026-10-15T20:33:10.795Z] [build] npm error node-pre-gyp ERR! cwd /build/next/node_modules/canvas
[2026-10-15T20:33:10.795Z] [build] npm error node-pre-gyp ERR! node -v v22.23.2
[2026-10-15T20:33:10.795Z] [build] npm error node-pre-gyp ERR! node-pre-gyp -v v1.0.11
[2026-10-15T20:33:10.795Z] [build] npm error node-pre-gyp ERR! not ok
[2026-10-15T20:33:10.795Z] [build] npm error A complete log of this run can be found in: /build/.npm-cache/_logs/2026-10-15T20_32_47_117Z-debug-0.log
[2026-10-15T20:33:11.346Z] ✖ فشل النشر: فشل تثبيت الحزم — راجع سجلّ البناء
[2026-10-15T20:41:13.496Z] [build] استنساخ karamalturk63-source/A#main …
[2026-10-15T20:41:15.302Z] [build] فحص المستودع …
[2026-10-15T20:41:16.136Z] [build] المستودع سليم (1MB، 30 ملف)
[2026-10-15T20:41:17.021Z] [build] تثبيت الحزم …
[2026-10-15T20:41:35.289Z] [build] npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
[2026-10-15T20:41:35.392Z] [build] npm warn deprecated npmlog@5.0.1: This package is no longer supported.
[2026-10-15T20:41:35.439Z] [build] npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
[2026-10-15T20:41:35.520Z] [build] npm warn deprecated gauge@3.0.2: This package is no longer supported.
[2026-10-15T20:41:35.615Z] [build] npm warn deprecated are-we-there-yet@2.0.0: This package is no longer supported.
[2026-10-15T20:41:35.643Z] [build] npm warn deprecated glob@7.2.3: Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me
[2026-10-15T20:41:36.341Z] [build] npm warn deprecated tar@6.2.1: Old versions of tar are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me
[2026-10-15T20:41:42.308Z] [build] npm error code 1
[2026-10-15T20:41:42.308Z] [build] npm error path /build/next/node_modules/canvas
[2026-10-15T20:41:42.308Z] [build] npm error command failed
[2026-10-15T20:41:42.308Z] [build] npm error command sh -c node-pre-gyp install --fallback-to-build --update-binary
[2026-10-15T20:41:42.308Z] [build] npm error Failed to execute '/usr/local/bin/node /usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js configure --fallback-to-build --update-binary --module=/build/next/node_modules/canvas/build/Release/canvas.node --module_name=canvas --module_path=/build/next/node_modules/canvas/build/Release --napi_version=10 --node_abi_napi=napi --napi_build_version=0 --node_napi_label=node-v127' (1)
[2026-10-15T20:41:42.308Z] [build] npm error node-pre-gyp info it worked if it ends with ok
[2026-10-15T20:41:42.308Z] [build] npm error node-pre-gyp info using node-pre-gyp@1.0.11
[2026-10-15T20:41:42.308Z] [build] npm error node-pre-gyp info using node@22.23.2 | linux | x64
[2026-10-15T20:41:42.308Z] [build] npm error node-pre-gyp http GET https://github.com/Automattic/node-canvas/releases/download/v2.11.2/canvas-v2.11.2-node-v127-linux-glibc-x64.tar.gz
[2026-10-15T20:41:42.308Z] [build] npm error node-pre-gyp ERR! install response status 404 Not Found on https://github.com/Automattic/node-canvas/releases/download/v2.11.2/canvas-v2.11.2-node-v127-linux-glibc-x64.tar.gz
[2026-10-15T20:41:42.308Z] [build] npm error node-pre-gyp WARN Pre-built binaries not installable for canvas@2.11.2 and node@22.23.2 (node-v127 ABI, glibc) (falling back to source compile with node-gyp)
[2026-10-15T20:41:42.308Z] [build] npm error node-pre-gyp WARN Hit error response status 404 Not Found on https://github.com/Automattic/node-canvas/releases/download/v2.11.2/canvas-v2.11.2-node-v127-linux-glibc-x64.tar.gz
[2026-10-15T20:41:42.308Z] [build] npm error gyp info it worked if it ends with ok
[2026-10-15T20:41:42.308Z] [build] npm error gyp info using node-gyp@11.5.0
[2026-10-15T20:41:42.308Z] [build] npm error gyp info using node@22.23.2 | linux | x64
[2026-10-15T20:41:42.308Z] [build] npm error gyp info ok
[2026-10-15T20:41:42.308Z] [build] npm error gyp info it worked if it ends with ok
[2026-10-15T20:41:42.308Z] [build] npm error gyp info using node-gyp@11.5.0
[2026-10-15T20:41:42.308Z] [build] npm error gyp info using node@22.23.2 | linux | x64
[2026-10-15T20:41:42.308Z] [build] npm error gyp ERR! find Python
[2026-10-15T20:41:42.308Z] [build] npm error gyp ERR! find Python Python is not set from command line or npm configuration
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! find Python Python is not set from environment variable PYTHON
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! find Python checking if "python3" can be used
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! find Python - executable path is ""
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! find Python - "" could not be run
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! find Python checking if "python" can be used
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! find Python - executable path is ""
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! find Python - "" could not be run
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! find Python
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! find Python **********************************************************
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! find Python You need to install the latest version of Python.
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! find Python Node-gyp should be able to find and use Python. If not,
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! find Python you can try one of the following options:
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! find Python - Use the switch --python="/path/to/pythonexecutable"
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! find Python (accepted by both node-gyp and npm)
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! find Python - Set the environment variable PYTHON
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! find Python - Set the npm configuration variable python:
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! find Python npm config set python "/path/to/pythonexecutable"
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! find Python For more information consult the documentation at:
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! find Python https://github.com/nodejs/node-gyp#installation
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! find Python **********************************************************
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! find Python
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! configure error
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! stack Error: Could not find any Python installation to use
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! stack at PythonFinder.fail (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/find-python.js:306:11)
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! stack at PythonFinder.findPython (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/find-python.js:164:17)
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! stack at process.processTicksAndRejections (node:internal/process/task_queues:103:5)
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! stack at async configure (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/configure.js:27:18)
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! stack at async run (/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js:81:18)
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! System Linux 6.8.0-142-generic
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! command "/usr/local/bin/node" "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "configure" "--fallback-to-build" "--update-binary" "--module=/build/next/node_modules/canvas/build/Release/canvas.node" "--module_name=canvas" "--module_path=/build/next/node_modules/canvas/build/Release" "--napi_version=10" "--node_abi_napi=napi" "--napi_build_version=0" "--node_napi_label=node-v127"
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! cwd /build/next/node_modules/canvas
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! node -v v22.23.2
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! node-gyp -v v11.5.0
[2026-10-15T20:41:42.309Z] [build] npm error gyp ERR! not ok
[2026-10-15T20:41:42.309Z] [build] npm error node-pre-gyp ERR! build error
[2026-10-15T20:41:42.309Z] [build] npm error node-pre-gyp ERR! stack Error: Failed to execute '/usr/local/bin/node /usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js configure --fallback-to-build --update-binary --module=/build/next/node_modules/canvas/build/Release/canvas.node --module_name=canvas --module_path=/build/next/node_modules/canvas/build/Release --napi_version=10 --node_abi_napi=napi --napi_build_version=0 --node_napi_label=node-v127' (1)
[2026-10-15T20:41:42.309Z] [build] npm error node-pre-gyp ERR! stack     at ChildProcess.<anonymous> (/build/next/node_modules/@mapbox/node-pre-gyp/lib/util/compile.js:89:23)
[2026-10-15T20:41:42.309Z] [build] npm error node-pre-gyp ERR! stack     at ChildProcess.emit (node:events:519:28)
[2026-10-15T20:41:42.309Z] [build] npm error node-pre-gyp ERR! stack     at maybeClose (node:internal/child_process:1101:16)
[2026-10-15T20:41:42.309Z] [build] npm error node-pre-gyp ERR! stack     at ChildProcess._handle.onexit (node:internal/child_process:304:5)
[2026-10-15T20:41:42.309Z] [build] npm error node-pre-gyp ERR! System Linux 6.8.0-142-generic
[2026-10-15T20:41:42.309Z] [build] npm error node-pre-gyp ERR! command "/usr/local/bin/node" "/build/next/node_modules/.bin/node-pre-gyp" "install" "--fallback-to-build" "--update-binary"
[2026-10-15T20:41:42.309Z] [build] npm error node-pre-gyp ERR! cwd /build/next/node_modules/canvas
[2026-10-15T20:41:42.309Z] [build] npm error node-pre-gyp ERR! node -v v22.23.2
[2026-10-15T20:41:42.309Z] [build] npm error node-pre-gyp ERR! node-pre-gyp -v v1.0.11
[2026-10-15T20:41:42.309Z] [build] npm error node-pre-gyp ERR! not ok
[2026-10-15T20:41:42.310Z] [build] npm error A complete log of this run can be found in: /build/.npm-cache/_logs/2026-10-15T20_41_18_017Z-debug-0.log
[2026-10-15T20:41:42.733Z] ✖ فشل النشر: فشل تثبيت الحزم — راجع سجلّ البناء
[2026-10-15T20:42:00.329Z] [build] استنساخ karamalturk63-source/ORXEN#main …
[2026-10-15T20:42:02.465Z] [build] فحص المستودع …
[2026-10-15T20:42:03.049Z] [build] المستودع سليم (1MB، 28 ملف)
[2026-10-15T20:42:03.576Z] [build] تثبيت الحزم …
[2026-10-15T20:42:04.810Z] [build] npm error code ENOENT
[2026-10-15T20:42:04.810Z] [build] npm error syscall open
[2026-10-15T20:42:04.810Z] [build] npm error path /build/next/package.json
[2026-10-15T20:42:04.810Z] [build] npm error errno -2
[2026-10-15T20:42:04.810Z] [build] npm error enoent Could not read package.json: Error: ENOENT: no such file or directory, open '/build/next/package.json'
[2026-10-15T20:42:04.810Z] [build] npm error enoent This is related to npm not being able to find a file.
[2026-10-15T20:42:04.810Z] [build] npm error enoent
[2026-10-15T20:42:04.814Z] [build] npm error A complete log of this run can be found in: /build/.npm-cache/_logs/2026-10-15T20_42_03_978Z-debug-0.log
[2026-10-15T20:42:05.167Z] ✖ فشل النشر: فشل تثبيت الحزم — راجع سجلّ البناء
[2026-10-15T20:45:30.506Z] ✖ بلغت حدّ 10 نشرات في الساعة — كل نشر يحجز خادم بناء يشاركك فيه غيرك. أعد المحاولة بعد قليل.
[2026-10-15T20:47:45.407Z] ✖ بلغت حدّ 10 نشرات في الساعة — كل نشر يحجز خادم بناء يشاركك فيه غيرك. أعد المحاولة بعد قليل.