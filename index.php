<?php
/**
 * @package    Joomla.Site
 * @subpackage Template.barracuda
 *
 * @author     mvshu <your@email.com>
 * @copyright  A copyright
 * @license    GNU General Public License version 2 or later; see LICENSE.txt
 * @link       http://your.url.com
 */

defined( '_JEXEC' ) or die( 'Restricted access' );

use Joomla\CMS\Language\Text;

require_once JPATH_THEMES . '/' . $this->template . '/helper.php';

tplBarracudaHelper::loadCss();
tplBarracudaHelper::loadJs();
tplBarracudaHelper::setMetadata();

JHtml::_('behavior.keepalive');

$app = JFactory::getApplication();
$sitename = $app->get('sitename');
$logotypeImage = $this->params->get('logotypeImage');
$backgroundImage = $this->params->get('backgroundImage');
$backgroundColor = $this->params->get('backgroundColor');
$logotypeLink = $this->params->get('logotypeLink');
$favicon = $this->params->get('favicon');
$viewportHeight = $this->params->get('viewportHeight');
$containerColor = $this->params->get('containerColor');
$menuActiveColor = $this->params->get('menuActiveColor');
$menuHoverColor = $this->params->get('menuHoverColor');
$url = $this->baseurl;


if ($logotypeImage) {
    $logo = '<img src="' . JUri::root() . $logotypeImage . '" alt="" />';
}
else {
    $logo = '';
}

if ($logotypeLink == On) {
    $logoLn = '<a href="'.$url . '">'.$logo.'</a>';
}
else {
    $logoLn = $logo;
}

if ($backgroundImage) {
    $background = ':root {background-image: url('.JUri::root().$backgroundImage.'); background-attachment: fixed; background-size: 100%;}';
}
else {
    $background = ':root {background:'.$backgroundColor.';}';
}

if ($viewportHeight) {
    $vh = 'min-height: '.$viewportHeight.'vh;';
}

if ($this->countModules('LeftAside') > 0) {
    $leftasidewidth = "3"; $contentwidth = "9";
} else if ($this->countModules('LeftAsideSticky') > 0) {
    $leftasidewidth = "3"; $contentwidth = "9";
} else {
    $leftasidewidth = "0"; $contentwidth = "12";
}

if ($containerColor) {
    $ctnColor = " .ctn {background-color: $containerColor;}";
}

if ($menuActiveColor) {
    $menuAColor = " #navigation > nav > div > div > .nav .active {background-color: $menuActiveColor;}";
}

if ($menuHoverColor) {
    $menuHColor = " #navigation nav > div > div > .nav > li a:hover {background-color: $menuHoverColor;}";
}

?>
<!DOCTYPE html>
<html lang="<?php echo $this->language; ?>" dir="<?php echo $this->direction; ?>">
<head>
    <?php include 'metrika.php';?>

	<jdoc:include type="head" />

    <style type="text/css">
        <?php echo $background . $ctnColor . $menuAColor . $menuHColor; ?>
    </style>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="<?php echo $favicon ?>" type="image/x-icon">

</head>
<body class="<?php echo tplBarracudaHelper::setBodySuffix(); ?>" onresize="logoResize()">
      <?php echo tplBarracudaHelper::setAnalytics(0, 'your-analytics-id'); ?>




<nav class="container-xl ctn" id="navigation" role="navigation" >
	<jdoc:include type="modules" name="Navigation" style="none" />
</nav>

<div class="container-xl " id="logo">
    <?php echo $logoLn; ?>
</div>

<div class="container-xl ctn" style="<?php echo $vh ?>">
    <div class="row">
        <aside class="col-lg-<?php echo $leftasidewidth; ?> " id="leftaside">
            <div>
                <jdoc:include type="modules" name="LeftAside"  />
            </div>
            <div class="LeftAsideSticky">
                <jdoc:include type="modules" name="LeftAsideSticky"  />
            </div>
        </aside>
        <main class="col-lg-<?php echo $contentwidth; ?>  " id="content">
            <jdoc:include type="message" />
            <jdoc:include type="component" />
            <jdoc:include type="modules" name="Content"  />
        </main>
    </div>
</div>

<div class="container-xl ctn" id="breadcrumbs">
    <jdoc:include type="modules" name="Breadcrumbs"  />
</div>

<footer class="container-xl ctn" id="footer">
	<jdoc:include type="modules" name="footer" style="none" />

</footer>
<jdoc:include type="modules" name="debug" style="none" />


        <script type="text/javascript" src="<?php echo $this->baseurl?>/templates/<?php echo $this->template ?>/js/video_iframeFeat.js"></script>
        <script type="text/javascript" src="<?php echo $this->baseurl?>/templates/<?php echo $this->template ?>/js/main.js"></script>

		<script type="text/javascript" src="<?php echo $this->baseurl?>/templates/<?php echo $this->template ?>/js/bootstrap.js"></script>
		<script type="text/javascript" src="<?php echo $this->baseurl?>/templates/<?php echo $this->template ?>/js/bootstrap.bundle.js"></script>

</body>
</html>
