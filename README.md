# AntCMS
a simple CMS

#开发日志
  1.   2016-04-21 框架雏形已经完成，实现了简单的前后端同构，动态映射静态资源文件
  2.   接下来要做的就是利用react的路由管理实现后端同步的路由匹配，用前端路由来实现后端的路由
#redux 学习
``
  /*
                   _________               ____________                ___________
                  |         |             |            |              |           |
                  | Action  |------------▶| Dispatcher |------------▶| callbacks |
                  |_________|             |____________|              |___________|
                      ▲                                                    |
                      |                                                    |
                      |                                                    |
  _________       ____|_____                                           ____▼____
 |         |◀----|  Action  |                                         |         |
 | Web API |     | Creators |                                          |  Store  |
 |_________|----▶|__________|                                         |_________|
                       ▲                                                    |
                       |                                                    |
                  ____ |________           ____________                 ____▼____
                 |   User       |          |   React   |               | Change  |
                 | interactions |◀-------- |   Views   |◀-------------| events  |
                 |______________|          |___________|               |_________|

*/
``
