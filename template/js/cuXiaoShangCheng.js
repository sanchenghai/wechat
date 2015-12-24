$(function(){
  //全局要用的变量
  var category = 0,//默认加载全部分类
        loadNow = false,//数据加载中标志
        gwd_haitao_list = $("#gwd_haitao_list .container");//加载数据时的父节点

  // 页面滑动效果
  $(window).on("scroll", function(){
    //页面滑动自动加载数据bottomflag
    var windowScrollTop = $(window).scrollTop() || $(document).scrollTop(),
         windowHeight = $(window).height(),
        documentHeight = $(document).height();
    // console.log(windowScrollTop);
    // console.log(windowScrollTop + windowHeight);
    // console.log(documentHeight);
    if(windowScrollTop + windowHeight > documentHeight - 100 && !loadNow){
      loadNow = true;
      gwd_haitao_list.append("<div id='loading' style='text-align:center;padding:10px;'>正在加载...</div>");
      //加载数据，成功后loadNow = false; $("#loading").remove();
      // $.ajax();请求数据，和下一个类似。示例如下：
      $.getJSON("http://open.gwdang.com/query?appkey=14ddb9671ec3a384ed28efef3e481a20&ac=quan&order=time&page=2&pagesize=10&callback=?", function(data){
          loadNow = false;
          $("#loading").remove();
          renderHaitao(data, gwd_haitao_list);
      });
    }
  });

  //数据选择
  $(".col-gwd-5-20").on("click", function(){
    var thiscategory = $(this).index();
    if(thiscategory == category){
      return;
    }else{
      category = thiscategory;
    }
    //category分别是0~9，根据category请求不同的数据接口
    // $.ajax();请求数据，和上一个类似，成功后gwd_haitao_list.empty();示例如下：
    $.getJSON("http://open.gwdang.com/query?appkey=14ddb9671ec3a384ed28efef3e481a20&ac=quan&order=time&page=2&pagesize=10&callback=?", function(data){
        gwd_haitao_list.empty();
        renderHaitao(data, gwd_haitao_list);
    });
  });

});