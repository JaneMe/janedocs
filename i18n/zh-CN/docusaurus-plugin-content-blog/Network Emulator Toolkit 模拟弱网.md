---
slug: network-emulator-toolkit
title: "Network Emulator Toolkit 模拟弱网"
author: Jane
author_url: https://github.com/JaneMe
author_title: JaneMe
author_image_url: https://avatars.githubusercontent.com/u/47032193
tags: [jane, zain]
---

# Network Emulator Toolkit 模拟弱网

## 下载

下载链接：https://pan.baidu.com/s/1AdG6pFluAday4cv2c1eLtQ 
提取码：sgp0



链接中包含文件说明：

- Network-Emulator-Toolkit-x64.zip （压缩包）


- LiebaoFreeWiFi5.1.exe （安装包）


- Untitled.xml （Network Emulator Toolkit配置文件）


## 安装

- 安装Network Emulator Toolkit

  解压 **Network-Emulator-Toolkit-x64.zip** 后双击启动 `NEW_X64.msi` 进行安装，安装完成后桌面不会生成快捷方式，需要打开安装目录下的 `bin` 文件夹，找到 `newtui.exe` 发送至桌面快捷方式。

![image-20211015105217380](https://i.loli.net/2021/10/15/ZivWy1CuxLVb4q7.png)

- 安装猎豹免费WiFi（或者360WiFi）

  双击启动 `LiebaoFreeWiFi5.1.exe` 进行安装，安装完成后启动猎豹免费WiFi。

## 配置上下行通道

- 启动 Network-Emulator 应用程序

- 【File->New】新建一个文件命名 “模拟丢包.xml” 

- 【Configuration->New Filter】添加过滤器
  ![image-20211015111307027](https://i.loli.net/2021/10/15/mbLWp5ERrcukBnO.png)

- 【Configuration->New Link】添加上下行连接
  ![image-20211015113202577](https://i.loli.net/2021/10/15/cXMLzx7KvF8nboI.png)


- 双击上下行连接线添加上下行弱网限制
  ![image-20211015113424240](https://i.loli.net/2021/10/15/jN3OA4pTfE8ynGa.png)

## 配置模拟丢包（Loss）

- **No Loss**：默认，不模拟丢包。
- **Periodic Loss**：模拟周期性丢包。按填写数量（设为n个），每n个包，就丢一个包。例如：填写数量为2，则为每2个包丢1个包，即丢包率为 50% 。
- **Random Rate**：模拟随机丢包。按给定丢包的概率，随机丢包。即设置50%丢包率，则填写为0.5。（丢包率为0~1之间，若填写的值大于1时会报错)
- **Burst Loss**：模拟根据给定的可能性进行丢包。当发生一个丢包事件时，接着连续丢几个包（丢包数量控制在最大（max）最小值（min）之间）。
- **Gilbert-Elliot Loss**：模拟发生数据包丢失遵循 Gilbert-Elliot 模型，由两个状态组成：好的状态和坏的状态。可分别为这2个状态指定数据包丢失率，同时可设置网络传输在这两种状态的概率。



1. 案例：模拟周期性丢包，设置上行丢包率为20%，下行丢包率为50%

   步骤：

   - 上行丢包率为20%则为每5个包丢1个；下行丢包率为50%则为每2个包丢1个。
     ![image-20211015115855420](https://i.loli.net/2021/10/15/SAgqMBlpD8CXhJ9.png)

   - 【Action->Start】启动弱网设置
     ![image-20211015120054906](https://i.loli.net/2021/10/15/2LXHil57fdUnjrm.png)



2. 案例：模拟随机丢包，设置上行丢包率为30%，下行丢包率为25%

   步骤：

   - 上行丢包率30%则为设置为0.3；下行丢包率25%则设置为0.25。
     ![image-20211015120750526](https://i.loli.net/2021/10/15/AP1mtk93idgjczl.png)

   - 【Action->Start】启动弱网设置
     

 

