$.noConflict();

jQuery(document).ready(function($) {

	"use strict";

	[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
		new SelectFx(el);
	} );

	jQuery('.selectpicker').selectpicker;

	// Popovers
	$(function () {
		$('[data-toggle="popover"]').popover()
	})

	$('.popover-dismiss').popover({
		trigger: 'focus hover'
	})

	$('#menuToggle').on('click', function(event) {
		$('body').toggleClass('open');
	});

	$('.search-trigger').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.search-trigger').parent('.header-left').addClass('open');
	});

	$('.search-close').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.search-trigger').parent('.header-left').removeClass('open');
	});

	// $('.user-area> a').on('click', function(event) {
	// 	event.preventDefault();
	// 	event.stopPropagation();
	// 	$('.user-menu').parent().removeClass('open');
	// 	$('.user-menu').parent().toggleClass('open');
	// });

	// User-defined Scripts
	// Side panel, Content panel responsive settings
	// Clicking Sections
	$('.navbar-nav .dropdown').on('click', function() {
		$('#left-panel').css({'width':'385px'});
		$('#right-panel').css({'margin-left':'385px'});
	});
	// Clicking Tags
	$('.navbar-nav .dropdown .dropdown-menu .dropdown').on('click', function() {
		$('#left-panel').css({'width':'545px'});
		$('#right-panel').css({'margin-left':'545px'});
	});

	$('.navbar-nav .dropdown .dropdown-menu .dropdown').on('click', function() {
		event.preventDefault();
		event.stopPropagation();
		$('.navbar-nav .dropdown .dropdown-menu .dropdown').find('.dropdown-toggle').attr("aria-expanded","true");
		$('.navbar-nav .dropdown .dropdown-menu .dropdown').find('.dropdown-menu').removeClass('show');
		$(this).find('.dropdown-menu').addClass('show');
		event.stopPropagation();
	});
	
	$('.navbar-nav .dropdown .dropdown-menu .dropdown .dropdown-menu li').on('click', function() {
		event.preventDefault();
		event.stopPropagation();
		// $('.navbar-nav .dropdown .dropdown-menu .dropdown .dropdown-menu li').find('.dropdown-menu').removeClass('show');
		$('.navbar-nav').find('.show').removeClass('show');
		$('.navbar-nav .dropdown').find('.show').removeClass('show');
		$('.navbar-nav .dropdown').find('.dropdown-toggle').attr("aria-expanded","false");
		$('.navbar-nav .dropdown .dropdown-menu .dropdown').find('.show').removeClass('show');
		$('.navbar-nav .dropdown .dropdown-menu .dropdown').find('.dropdown-toggle').attr("aria-expanded","false");
		// $('#left-panel').css({'width':'250px'});
		// $('#right-panel').css({'margin-left':'250px'});
	});

	$('')

});