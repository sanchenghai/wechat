$(function(){
  //全局要用的变量
  var  loadNow = false,//数据加载中标志
        gwd_cxrm = $("#gwd_cxrm .container");//加载数据时的父节点

  // 页面滑动效果
  $(window).on("scroll", function(){
    //页面滑动自动加载数据bottomflag
    var windowScrollTop = $(window).scrollTop() || $(document).scrollTop(),
         windowHeight = $(window).height(),
        documentHeight = $(document).height();
    if(windowScrollTop + windowHeight > documentHeight - 100 && !loadNow){
      loadNow = true;
      gwd_cxrm.append("<div id='loading' style='text-align:center;padding:10px;'>正在加载...</div>");
      //加载数据，成功后loadNow = false; $("#loading").remove();
      // $.ajax();请求数据。示例如下：
      $.getJSON("http://open.gwdang.com/query?appkey=14ddb9671ec3a384ed28efef3e481a20&ac=quan&order=time&page=2&pagesize=10&callback=?", function(data){
          loadNow = false;
          $("#loading").remove();
          renderCuxiaoremen(data, gwd_cxrm);
      });
    }
  });

});