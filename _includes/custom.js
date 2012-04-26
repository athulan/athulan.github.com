<script type="text/javascript">
	  $(function () {
                      var tabContainers = $('section.screenshots .tab');
                      tabContainers.hide().filter(':first').show();
                      
                      $('section.screenshots ul.tabs a').click(function () {
                              tabContainers.hide();
                              tabContainers.filter(this.hash).fadeIn(400);
                              $('section.screenshots ul.tabs a').removeClass('selected');
                              $(this).addClass('selected');
                              return false;
                      }).filter(':first').click();
              });
</script>