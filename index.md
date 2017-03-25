<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="js/like-dislike.js"></script>
<div id="demo">
  <button class="like">Like 
    <span class="likes">0</span>
  </button>
  <button class="dislike">Dislike 
    <span class="dislikes">0</span>
  </button>
</div>
<script>
$('#demo').likeDislike({

  // update like / dislike counters
  click: function (btnType, likes, dislikes, event) {
      var likesElem = $(this).find('.likes');
      var dislikedsElem = $(this).find('.dislikes');
      likesElem.text(parseInt(likesElem.text()) + likes);
      dislikedsElem.text(parseInt(dislikedsElem.text()) + dislikes);
  }
  
});
	</script>
