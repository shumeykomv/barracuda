<?php
/**
 * @package     Joomla.Site
 * @subpackage  Layout
 *
 * @copyright   Copyright (C) 2005 - 2020 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

use Joomla\Utilities\ArrayHelper;

extract($displayData);

// Get some system objects.
$document = JFactory::getDocument();

/**
 * Layout variables
 * -----------------
 * @var   string   $autocomplete    Autocomplete attribute for the field.
 * @var   boolean  $autofocus       Is autofocus enabled?
 * @var   string   $class           Classes for the input.
 * @var   string   $description     Description of the field.
 * @var   boolean  $disabled        Is this field disabled?
 * @var   string   $group           Group the field belongs to. <fields> section in form XML.
 * @var   boolean  $hidden          Is this field hidden in the form?
 * @var   string   $hint            Placeholder for the field.
 * @var   string   $id              DOM id of the field.
 * @var   string   $label           Label of the field.
 * @var   string   $labelclass      Classes to apply to the label.
 * @var   boolean  $multiple        Does this field support multiple values?
 * @var   string   $name            Name of the input field.
 * @var   string   $onchange        Onchange attribute for the field.
 * @var   string   $onclick         Onclick attribute for the field.
 * @var   string   $pattern         Pattern (Reg Ex) of value of the form field.
 * @var   boolean  $readonly        Is this field read only?
 * @var   boolean  $repeat          Allows extensions to duplicate elements.
 * @var   boolean  $required        Is this field required?
 * @var   integer  $size            Size attribute of the input.
 * @var   boolean  $spellcheck      Spellcheck state for the form field.
 * @var   string   $validate        Validation rules to apply.
 * @var   string   $value           Value attribute of the field.
 * @var   array    $checkedOptions  Options that will be set as checked.
 * @var   boolean  $hasValue        Has this field a value assigned?
 * @var   array    $options         Options available for this field.
 *
 * Calendar Specific
 * @var   string   $localesPath     The relative path for the locale file
 * @var   string   $helperPath      The relative path for the helper file
 * @var   string   $minYear         The minimum year, that will be subtracted/added to current year
 * @var   string   $maxYear         The maximum year, that will be subtracted/added to current year
 * @var   integer  $todaybutton     The today button
 * @var   integer  $weeknumbers     The week numbers display
 * @var   integer  $showtime        The time selector display
 * @var   integer  $filltable       The previous/next month filling
 * @var   integer  $timeformat      The time format
 * @var   integer  $singleheader    Display different header row for month/year
 * @var   integer  $direction       The document direction
 */

$inputvalue = '';

// Build the attributes array.
$attributes = array();

empty($size)      ? null : $attributes['size'] = $size;
empty($maxlength) ? null : $attributes['maxlength'] = ' maxlength="' . $maxLength . '"';
empty($class)     ? null : $attributes['class'] = $class;
!$readonly        ? null : $attributes['readonly'] = 'readonly';
!$disabled        ? null : $attributes['disabled'] = 'disabled';
empty($onchange)  ? null : $attributes['onchange'] = $onchange;

if ($required)
{
	$attributes['required'] = '';
	$attributes['aria-required'] = 'true';
}

// Handle the special case for "now".
if (strtoupper($value) == 'NOW')
{
	$value = JFactory::getDate()->format('Y-m-d H:i:s');
}

$readonly = isset($attributes['readonly']) && $attributes['readonly'] == 'readonly';
$disabled = isset($attributes['disabled']) && $attributes['disabled'] == 'disabled';

if (is_array($attributes))
{
	$attributes = ArrayHelper::toString($attributes);
}

$cssFileExt = ($direction === 'rtl') ? '-rtl.css' : '.css';

// Load polyfills for older IE
JHtml::_('behavior.polyfill', array('event', 'classlist', 'map'), 'lte IE 11');

// The static assets for the calendar
JHtml::_('script', $localesPath, false, true, false, false, true);
JHtml::_('script', $helperPath, false, true, false, false, true);
JHtml::_('script', 'system/fields/calendar.min.js', false, true, false, false, true);
JHtml::_('stylesheet', 'system/fields/calendar' . $cssFileExt, array(), true);
?>
<div class="field-calendar">
	<?php if (!$readonly && !$disabled) : ?>
	<div class="input-append">
		<?php endif; ?>
		<input type="text" id="<?php echo $id; ?>" name="<?php
		echo $name; ?>" value="<?php
		echo htmlspecialchars(($value !== '0000-00-00 00:00:00') ? $value : '', ENT_COMPAT, 'UTF-8'); ?>" <?php echo $attributes; ?>
		<?php echo !empty($hint) ? 'placeholder="' . htmlspecialchars($hint, ENT_COMPAT, 'UTF-8') . '"' : ''; ?> data-alt-value="<?php
		echo htmlspecialchars($value, ENT_COMPAT, 'UTF-8'); ?>" autocomplete="off"/>
		<button type="button" class="<?php echo ($readonly || $disabled) ? 'hidden ' : ''; ?>btn btn-secondary"
			id="<?php echo  $id; ?>_btn"
			data-inputfield="<?php echo $id; ?>"
			data-dayformat="<?php echo $format; ?>"
			data-button="<?php echo $id; ?>_btn"
			data-firstday="<?php echo JFactory::getLanguage()->getFirstDay(); ?>"
			data-weekend="<?php echo JFactory::getLanguage()->getWeekEnd(); ?>"
			data-today-btn="<?php echo $todaybutton; ?>"
			data-week-numbers="<?php echo $weeknumbers; ?>"
			data-show-time="<?php echo $showtime; ?>"
			data-show-others="<?php echo $filltable; ?>"
			data-time-24="<?php echo $timeformat; ?>"
			data-only-months-nav="<?php echo $singleheader; ?>"
			<?php echo isset($minYear) && strlen($minYear) ? 'data-min-year="' . $minYear . '"' : ''; ?>
			<?php echo isset($maxYear) && strlen($maxYear) ? 'data-max-year="' . $maxYear . '"' : ''; ?>
			title="<?php echo JText::_('JLIB_HTML_BEHAVIOR_OPEN_CALENDAR'); ?>" >
          
 				<span class="icon-calendar" aria-hidden="true"></span>
          
          		<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-calendar-date-fill" viewBox="0 0 16 16">
  				<path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z"/>
  				<path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z"/>
				</svg>
          </button>
		<?php if (!$readonly && !$disabled) : ?>
	</div>
<?php endif; ?>
</div>
