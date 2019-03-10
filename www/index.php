<?php
require('Persistence.php');
$comment_post_ID = 1;
$db = new Persistence();
$comments = $db->get_comments($comment_post_ID);
$has_comments = (count($comments) > 0);
?>

<input type="hidden" name="comment_post_ID" value="<?php echo($comment_post_ID); ?>" id="comment_post_ID" />

<ol id="posts-list" class="hfeed<?php echo($has_comments?' has-comments':’); ?>">
  <li class="no-comments">Be the first to add a comment.</li>
  <?php
    foreach ($comments as $comment) {
      ?>
      <li><article id="comment_<?php echo($comment['id']); ?>" class="hentry">  
        <footer class="post-info">
          <abbr class="published" title="<?php echo($comment['date']); ?>">
            <?php echo( date('d F Y', strtotime($comment['date']) ) ); ?>
          </abbr>

          <address class="vcard author">
            By <a class="url fn" href="#"><?php echo($comment['comment_author']); ?></a>
          </address>
        </footer>

        <div class="entry-content">
          <p><?php echo($comment['comment']); ?></p>
        </div>
      </article></li>
      <?php
    }
  ?>
</ol>