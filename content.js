$(function() {
	var sticker_id = $("select[name='sticker_id']");
	load_preview(sticker_id);
	sticker_id.change(function() {
		load_preview($(this));
	})

	load_authkey();
})

function load_preview(sticker_id)
{
	var image_src = "http://dl.stickershop.line.naver.jp/products/0/0/1/" + sticker_id.val() + "/android/preview.png";
	var image_obj = $("#sticker_preview");

	if (image_obj.length > 0)
		image_obj.attr("src", image_src);
	else
		sticker_id.parent().append('<img id="sticker_preview" src="' + image_src + '" />');
}

function load_authkey()
{
	var key_name;

	if ($(location).attr('href').match('/android/')) key_name = "authkey";
	else if ($(location).attr('href').match('/android1/')) key_name = "encode_authkey";
	else if ($(location).attr('href').match('/ios/')) key_name = "accesstoken";
	else if ($(location).attr('href').match('/ios1/')) key_name = "encode_accesstoken";

	chrome.runtime.sendMessage({name:key_name}, 
		function(response) {
			var text_obj = $('input[name="line_authkey"]');
			text_obj.parent().append('<select name="line_authkey" id="line_authkey"></select>');
			$('input[name="line_authkey"]').remove();
			var select_obj = $('#line_authkey');
			var keys = response.authkey.split(/\n/);

			$.each(keys, function(index, value) {
				var option_string = value.split(/:(.+)?/);
				select_obj.append(new Option(option_string[0], option_string[1]));
			})
			

		})
}