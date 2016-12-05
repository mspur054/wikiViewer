$(document).ready(function() {
    var oForm;
    var obKeys;
    oForm = document.forms[0];

    function searchWiki(searchterm) {
        var apiUrl;
        var content;
        //apiUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&origin=*&exintro=&explaintext=&titles=" + searchterm; //+ "&callback=?";
        apiUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&origin=*&list=search&titles=10&exintro=1&explaintext=1&srsearch=" + searchterm;
        console.log(apiUrl);

        $.ajax({

            url: apiUrl,
           headers: {
               'Api-User-Agent': 'wikiViewer'
            },
            success: function(data) {
                var queryResults;
                //console.log(data.query.search);
                queryResults = data.query.search;
                console.log(queryResults[0]);
                for (i = 0; i < queryResults.length; i++){

                }
                //console.log(data.query.pages[3871014]);
            },
            error: function() {
                console.log("Failed to retrieve");
            }
        });

    }

    $(function() {
        $('form').each(function() {
            //console.log("1");
            $(this).find('input').keypress(function(e) {

                var searchEl;
                if (e.which == 13 || e.keypress == 13) {
                    e.preventDefault();
                    //console.log("2");
                    searchEl = oForm.elements["search"].value;
                    console.log("form fn: " +searchEl);
                    searchWiki(searchEl);
                    //this.form.submit();


                }
            });
            $(this).find('input[type=submit]').hide();
        });

    });

  /*  $("#submitField").submit(function() {
        var formInput = $("#search").val();
        alert("YO" + formInput);
        searchWiki(formInput);

    }); */

    /*      $(document).keypress(function(e) {
              if(e.which == 13) {
                  alert('You pressed enter!');
              }
          });*/
});

///w/api.php?action=query&format=json&prop=info%7Crevisions&list=&titles=rainbow&rvprop=ids%7Ctimestamp%7Cflags%7Ccomment%7Cuser%7Ccontent
