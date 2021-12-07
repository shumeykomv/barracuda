<?php

defined( '_JEXEC' ) or die( 'Restricted access' );

$doc = JFactory::getDocument();
$app = JFactory::getApplication();
$favicon = $this->params->get('favicon');
?>
  
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" dir="<?php echo $this->direction; ?>">

<head>
		<jdoc:include type="head" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="<?php echo $this->baseurl?>/templates/<?php echo $this->template ?>/css/offline.css" type="text/css" />
        <link rel="stylesheet" href="<?php echo $this->baseurl?>/templates/<?php echo $this->template ?>/css/bootstrap.css" type="text/css" />
        <link rel="shortcut icon" href="<?php echo $favicon ?>" type="image/x-icon">
</head>
<body>
	<div class="container-sm" id="offline-page">
      	<jdoc:include type="message" />
			<div>
          		<div id="offline-sitename">
          					<!-- Вывод имени сайта в тело сайта -->
          			<?php if ($app->get('offline_image') && file_exists($app->get('offline_image'))) : ?>
						<img src="<?php echo $app->get('offline_image'); ?>" alt="<?php echo htmlspecialchars($app->get('sitename')); ?>" />
					<?php endif; ?>
               		<?php echo htmlspecialchars($app->get('sitename')); ?>
							<!-- Конец -->
				</div>
                  
                	<!-- Вывод сообщения при выключенном сайте -->
				<?php if ($app->get('display_offline_message', 1) == 1 && str_replace(' ', '', $app->get('offline_message')) != '') : ?>
				<p><?php echo $app->get('offline_message'); ?></p                         
				<?php elseif ($app->get('display_offline_message', 1) == 2 && str_replace(' ', '', JText::_('JOFFLINE_MESSAGE')) != '') : ?>
				<p><?php echo JText::_('JOFFLINE_MESSAGE'); ?></p>
				<?php endif; ?> 
 					<!-- Конец -->
          
                  	<!--  Вывод формы входа -->
						<form action="<?php echo JRoute::_('index.php', true); ?>" method="post">
							<div>
								<input name="username"  class="login-form" id="username" type="text" autocomplete="off" placeholder="<?php echo JText::_('JGLOBAL_USERNAME'); ?>"  />
							</div>
							
							<div>
								<input name="password"  class="login-form" id="passwd" type="password" autocomplete="off" placeholder="<?php echo JText::_('JGLOBAL_PASSWORD'); ?>"  />
							</div>
							<?php if (count($twofactormethods) > 1) : ?>
							<div>
								<input type="text" name="secretkey"  class="login-form" placeholder="<?php echo JText::_('JGLOBAL_SECRETKEY'); ?>" id="secretkey" />
							</div>
							<?php endif; ?>
							<div>
								<button type="submit" name="Submit"><?php echo JText::_('JLOGIN'); ?> </button>
							</div>

							<input type="hidden" name="option" value="com_users" />
							<input type="hidden" name="task" value="user.login" />
							<input type="hidden" name="return" value="<?php echo base64_encode(JUri::base()); ?>" />
							<?php echo JHtml::_('form.token'); ?>
						</form>
					<!-- Конец -->
			</div>
	</div>
</body>
</html>
