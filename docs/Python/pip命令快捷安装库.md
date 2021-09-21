---
sidebar_position: 1
---

# pip命令快捷安装库

pip是一个安装和管理Python包的工具，vscode安装python插件会自带pip命令，但有可能pip版本较低，需要更新至最新版本。

- 更新 pip 

  ```python
  python -m pip install --upgrade pip
  ```

- Python导入表格数据需要用到 openpyxl 库，使用 pip 命令安装 openpyxl 库

  ```python
  pip install openpyxl
  ```

- 接口测试需要用到的requests库

  ```python
  pip install requests
  ```

  

# 使用pip命令安装RobotFrameWork

- pip安装wxpython

  ```python
  pip3 install wxpython
  ```

- pip安装RF

  ```python
  pip install robotframework==3.1.2
  ```

- pip安装ride

  ```
  pip install robotframework-ride
  ```

- robotframework常用库

  ```
  pip install robotframework-selenium2library==3.0.0
  Pip install robotframework-seleniumlibrary==3.0.0
  pip install robotframework-archivelibrary
  pip install robotframework-SSHLibrary
  pip install robotframework-ftplibrary
  ```

- web/UI自动化测试库
  引入selenium库

  ```
  pip install robotframework-selenium2library==3.0.0
  pip install robotframework-seleniumlibrary==3.0.0
  ```

  引入RequestsLibrary库

  ```
  pip install  requests
  pip install rebotframework-requests
  ```

- 安装python虚拟环境工具virtualenv

  ```python
  pip3 install virtualenv 
  或
  pip install virtualenv
  ```

- 通过virtualenv创建项目独立的python虚拟环境

  ```python
  virtualenv [文件夹名称]
  如：virtualenv Directory
  ```

- 引入RequestsLibrary

  ```
  pip install  requests
  pip install rebotframework-requests
  ```


python安装包：https://www.python.org

Pycharm安装包：http://www.jetbrains.com/pycharm/download/

Selenium安装包：https://pypi.python.org/pypi/selenium 

火狐浏览器(延长版)：http://www.firefox.com.cn/download/#more

谷歌浏览器安装包：https://www.google.cn/chrome/

IE浏览器安装包：https://support.microsoft.com/zh-cn/help/17621/internet-explorer-downloads

谷歌浏览器驱动chromedriver.exe：http://npm.taobao.org/mirrors/chromedriver/

火狐浏览器驱动geckodriver.exe：https://github.com/mozilla/geckodriver/releases

IE浏览器驱动iedriverserver.exe：http://selenium-release.storage.googleapis.com/index.html

# 遇到的问题

通过pip安装完所有的库后，使用命令“python ride.py”启动RIDE界面时出现以下报错：

```python
PS D:\install\Install_Directory\Python38\Scripts> python ride.py
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 0.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 3.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 4.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 5.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 6.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 7.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 19.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 20.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 21.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 22.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 25.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 26.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 27.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 28.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 29.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 30.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 31.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 32.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 33.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 34.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 35.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 36.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 37.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 38.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 39.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 40.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 43.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 44.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 45.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 46.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 47.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 48.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 49.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 50.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 51.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 52.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 53.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 54.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 55.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 56.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 57.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 58.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 59.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 60.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 61.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 62.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 63.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 67.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 68.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 69.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 70.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 71.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 13.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 14.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 0.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 3.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 4.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 5.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 6.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 7.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 19.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 20.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 21.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 22.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 25.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 26.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 27.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 28.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 29.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 30.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 31.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 32.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 33.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 34.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 35.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 36.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 37.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 38.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 39.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 40.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 43.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 44.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 45.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 46.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 47.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 48.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 49.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 50.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 51.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 52.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 53.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 54.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 55.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 56.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 57.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 58.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 59.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 60.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 61.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 62.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 63.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 67.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 68.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 69.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 70.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 71.
<class 'robotide.preferences.configobj.UnreprError'> Parse error in value at line 13.
Traceback (most recent call last):
  File "D:\install\Install_Directory\Python38\lib\site-packages\robotide\application\application.py", line 58, in OnInit
    self.frame = RideFrame(self, self._controller)
  File "D:\install\Install_Directory\Python38\lib\site-packages\robotide\ui\mainframe.py", line 175, in __init__
    self._init_ui()
  File "D:\install\Install_Directory\Python38\lib\site-packages\robotide\ui\mainframe.py", line 279, in _init_ui
    self.tree = Tree(self, self.actions,
  File "D:\install\Install_Directory\Python38\lib\site-packages\robotide\ui\tree.py", line 86, in __init__
    self._images = TreeImageList()
  File "D:\install\Install_Directory\Python38\lib\site-packages\robotide\ui\images.py", line 42, in __init__
  File "D:\install\Install_Directory\Python38\lib\site-packages\robotide\ui\images.py", line 80, in __init__
    self.normal = self._get_image(image_list, normal)
  File "D:\install\Install_Directory\Python38\lib\site-packages\robotide\ui\images.py", line 91, in _get_image
    img = wx.Image(path, wx.BITMAP_TYPE_PNG).ConvertToBitmap()
wx._core.wxAssertionError: C++ assertion "strcmp(setlocale(LC_ALL, NULL), "C") == 0" failed at ..\..\src\common\intl.cpp(1579) in wxLocale::GetInfo(): You probably called setlocale() directly instead of using wxLocale and now there is a mismatch between C/C++ and Windows locale.
Things are going to break, please only change locale by creating wxLocale objects to avoid this!
OnInit returned false, exiting...
Error in atexit._run_exitfuncs:
wx._core.wxAssertionError: C++ assertion "GetEventHandler() == this" failed at ..\..\src\common\wincmn.cpp(478) in wxWindowBase::~wxWindowBase(): any pushed event handlers must have been removed
```

解决方法

在 **D:\install\Install_Directory\Python38\Lib\site-packages\robotide\application** 目录下打开 `application.py` 文件，在图例位置加上字段 `self.locale = wx.Locale(wx.LANGUAGE_ENGLISH)` 保存，再次运行命令“python ride.py”则可正常打开 RIDE 界面了。

![image-20210820174902349](https://i.loli.net/2021/08/20/6fq7pRsyYPFMlXr.png)
