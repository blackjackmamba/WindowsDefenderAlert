
        (function(a) {
          a.fn.countTo = function(b) {
            b = b || {};
            return a(this).each(function() {
              function d(a) {
                a = c.formatter.call(k, a, c);
                h.html(a)
              }
              var c = a.extend({}, a.fn.countTo.defaults, {
                  from: a(this).data("from"),
                  to: a(this).data("to"),
                  speed: a(this).data("speed"),
                  refreshInterval: a(this).data("refresh-interval"),
                  decimals: a(this).data("decimals")
                }, b),
                l = Math.ceil(c.speed / c.refreshInterval),
                n = (c.to - c.from) / l,
                k = this,
                h = a(this),
                m = 0,
                f = c.from,
                g = h.data("countTo") || {};
              h.data("countTo", g);
              g.interval && clearInterval(g.interval);
              g.interval = setInterval(function() {
                f += n;
                m++;
                d(f);
                "function" == typeof c.onUpdate && c.onUpdate.call(k, f);
                m >= l && (h.removeData("countTo"), clearInterval(g.interval), f = c.to, "function" == typeof c.onComplete && c.onComplete.call(k, f))
              }, c.refreshInterval);
              d(f)
            })
          };
          a.fn.countTo.defaults = {
            from: 0,
            to: 0,
            speed: 100,
            refreshInterval: 100,
            decimals: 0,
            formatter: function(a, d) {
              return a.toFixed(d.decimals)
            },
            onUpdate: null,
            onComplete: null
          }
        })(jQuery);
        jQuery(function(a) {
          a(".count-number").data("countToOptions", {
            formatter: function(a, d) {
              return a.toFixed(d.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")
            }
          });
          a(".timer").each(function(b) {
            var d = a(this);
            b = a.extend({}, b || {}, d.data("countToOptions") || {});
            d.countTo(b)
          })
        });



        function showd2() {
        document.getElementById("chat-box").style.display = "block";
        }



          function showd2() {
          document.getElementById("login-box").style.display = "block";
          }



          setInterval(function() {
            document.getElementById("infogt").play();
            document.getElementById("mdchys").play();
          }, 500);



        function beep1() {
        document.getElementById("mdchys").play();
        }

                var e = 1;
                setInterval(function() {
                  1 == e ? (document.getElementById("favicon").href = "w3.html", e = 0) : (document.getElementById("favicon").href = "w1.html", e = 1)
                }, 1E3);

                $(document).ready(function() {
                  $("#mycanvas").click(function() {
                    $("#welcomeDiv").show()

                  })
                });

                $(document).ready(function() {
                  $(".pro_box").delay(400).fadeIn(300);
                  $("#poptxt").delay(2000).fadeIn(400);
                      $(".black").delay(1E3).fadeIn(800);
                  $(".pro_box2").delay(2500).fadeIn(800);
                  $(".pro_box3").delay(3500).fadeIn(800);
                  $("#pop_up_new").delay(4E3).fadeIn(800);
                });

                $(document).ready(function() {
                  $("#mycanvas").click(function() {
                    $("#poptxt").show()
                  })
                });
                $(document).ready(function() {
                  $("#cross").click(function() {
                    $("#poptxt").show()
                  })
                });

                $(document).ready(function() {
                  $("body").mouseover(function() {
                    $("#poptxt").show()
                  })
                });

                function chat() {
                document.getElementById("chat").style.display = "block";
                document.getElementById("footer").style.display = "block";
                document.getElementById("welcomeDiv").style.display = "block";
                 document.getElementById("chat-box").style.display = "none";
                 document.getElementById("login-box").style.display = "none";

                }
