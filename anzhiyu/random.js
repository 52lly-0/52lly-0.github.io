var posts=["2026/08/08/感谢博主视频详细讲解（上）/","2026/08/08/感谢博主视频详细讲解（下）/","2026/08/08/第三方节点转换/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };