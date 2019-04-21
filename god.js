var pvft = '(' + function () {
	'use strict';
	function defineobjectproperty(val, e, c, w) {
		
		return {
			value: val,
			enumerable: !!e,
			configurable: !!c,
			writable: !!w
		}
	}
	
	

	
	
	var originalStyleSetProperty = CSSStyleDeclaration.prototype.setProperty
	var originalSetAttrib = Element.prototype.setAttribute
	var originalNodeAppendChild = Node.prototype.appendChild

			var DEFAULT = 'auto';
	
   var baseFonts = ["default"]

	var FontWhiteList = ["Aharoni Bold","Andalus Regular","Angsana New","Angsana New Bold","Angsana New Italic","Angsana New Bold Italic","AngsanaUPC","AngsanaUPC Bold","AngsanaUPC Italic","AngsanaUPC Bold Italic","Aparajita","Aparajita Bold","Aparajita Italic","Aparajita Bold Italic","Arabic Typesetting Regular","Arial Unicode MS Regular","Arial","Arial Bold","Arial Black","Arial Italic","Arial Bold Italic","Batang","BatangChe","Browallia New","Browallia New Bold","Browallia New Italic","Browallia New Bold Italic","BrowalliaUPC","BrowalliaUPC Bold","BrowalliaUPC Italic","BrowalliaUPC Bold Italic","Calibri","Calibri Bold","Calibri Italic","Calibri Bold Italic","Cambria Math","Cambria","Cambria Bold","Cambria Italic","Cambria Bold Italic","Candara","Candara Bold","Candara Italic","Candara Bold Italic","Comic Sans MS","Comic Sans MS Bold","Consolas","Consolas Bold","Consolas Italic","Consolas Bold Italic","Constantia","Constantia Bold","Constantia Italic","Constantia Bold Italic","Corbel","Corbel Bold","Corbel Italic","Corbel Bold Italic","Cordia New","Cordia New Bold","Cordia New Italic","Cordia New Bold Italic","CordiaUPC","CordiaUPC Bold","CordiaUPC Italic","CordiaUPC Bold Italic","Courier New","Courier New Bold","Courier New Italic","Courier New Bold Italic","DFKai-SB","DaunPenh","David","David Bold","DilleniaUPC","DilleniaUPC Bold","DilleniaUPC Italic","DilleniaUPC Bold Italic","DokChampa","Dotum","DotumChe","Ebrima","Ebrima Bold","Estrangelo Edessa","EucrosiaUPC","EucrosiaUPC Bold","EucrosiaUPC Italic","EucrosiaUPC Bold Italic","Euphemia","FangSong","FrankRuehl","Franklin Gothic Medium","Franklin Gothic Medium Italic","FreesiaUPC","FreesiaUPC Bold","FreesiaUPC Italic","FreesiaUPC Bold Italic","Gabriola","Gautami","Gautami Bold","Georgia","Georgia Bold","Georgia Italic","& Georgia Bold Italic","Gisha","Gisha Bold","Gulim","GulimChe","Gungsuh","GungsuhChe","Impact","IrisUPC","IrisUPC Bold","IrisUPC Italic","IrisUPC Bold Italic","Iskoola Pota","IskoolaPota Bold","JasmineUPC","JasmineUPC Bold","JasmineUPC Italic","JasmineUPC Bold Italic","KaiTi","Kalinga","Kalinga Bold","Kartika","Kartika Bold","Khmer UI","Khmer UI Bold","KodchiangUPC","KodchiangUPC Bold","KodchiangUPC Italic","KodchiangUPC Bold Italic","Kokila","Kokila Bold","Kokila Italic","Kokila Bold Italic","Lao UI","Lao UI Bold","Latha","Latha Bold","Leelawadee","Leelawadee Bold","Levenim MT","Levenim MT Bold","LilyUPC","LilyUPC Bold","LilyUPC Italic","LilyUPC Bold Italic","Lucida Console","Lucida Sans Unicode","MS Gothic","MS Mincho","MS PGothic","MS PMincho","MS UI Gothic","MV Boli","Malgun Gothic","Malgun Gothic Bold","Mangal","Mangal Bold","Meiryo UI","Meiryo UI Bold","Meiryo UI Italic","Meiryo UI Bold Italic","Meiryo","Meiryo Bold","Meiryo Italic","Meiryo Bold Italic","Microsoft Himalaya","Microsoft JhengHei","Microsoft JhengHei Bold","Microsoft New Tai Lue","Microsoft New Tai Lue Bold","Microsoft PhagsPa","Microsoft PhagsPa Bold","Microsoft Sans Serif","Microsoft Tai Le","Microsoft Tai Le Bold","Microsoft Uighur","Microsoft YaHei","Microsoft YaHei Bold","Microsoft Yi Baiti","MingLiU","MingLiU-ExtB","MingLiU_HKSCS","MingLiU_HKSCS-ExtB","Miriam","Miriam Fixed","Mongolian Baiti","MoolBoran","NSimSun","Narkisim","Nyala","PMingLiU","PMingLiU-ExtB","Palatino Linotype","Palatino Linotype Bold","Palatino Linotype Italic","Palatino Linotype Bold Italic","Plantagenet Cherokee","Raavi","Raavi Bold","Rod","Sakkal Majalla","Sakkal Majalla Bold","Segoe Print","Segoe Print Bold","Segoe Script","Segoe Script Bold","Segoe UI Symbol","Segoe UI","Segoe UI Bold","Segoe UI Italic","Segoe UI Bold Italic","Segoe UI Light","Segoe UI Semibold","Shonar Bangla","Shonar Bangla Bold","Shruti","Shruti Bold","SimHei","SimSun","SimSun-ExtB","Simplified Arabic","Simplified Arabic Bold","Simplified Arabic Fixed","Sylfaen","Symbol","Tahoma","Tahoma Bold","Times New Roman"," Times New Roman Bold","Times New Roman Italic","Times New Roman Bold Italic","Traditional Arabic","Traditional Arabic Bold","Trebuchet MS","Trebuchet MS Bold","Trebuchet MS Italic","Trebuchet MS Bold Italic","Tunga","Tunga Bold","Utsaah","Utsaah Bold","Utsaah Italic","Utsaah Bold Italic","Vani","Vani Bold","Verdana","Verdana Bold","Verdana Italic","Verdana Bold Italic","Vijaya","Vijaya Bold","Vrinda","Vrinda Bold","Webdings","Wingdings"].map(function(x){return x.toLowerCase()})
		  

		var keywords = ["inherit", "auto", "default", "!Important"]
		

	baseFonts.push.apply(baseFonts, FontWhiteList)
	baseFonts.push.apply(baseFonts, keywords)




	function getAllowedFontFamily(family) {
		var fonts = family.replace(/"|'/g,'').split(',')
		var allowedFonts = fonts.filter(function(font) {
			if(font && font.length) {
				var normalised = font.trim().toLowerCase()
		
				for(var allowed of baseFonts)
					if(normalised == allowed) return true
			
				for (var allowed of document.fonts.values())
					if(normalised == allowed) return true
			}
		})
		return allowedFonts.map(function(f){
			var trimmed = f.trim()
			return ~trimmed.indexOf(' ') ? "'" + trimmed + "'" : trimmed
		}).join(", ")
	}
	

	function modifiedCssSetProperty(key, val) {
		if(key.toLowerCase() == 'font-family') {
			var keyresult = key.toLowerCase()
			var allowed = getAllowedFontFamily(val)
			var oldFF = this.fontFamily
			return originalStyleSetProperty.call(this, 'font-family', allowed || DEFAULT)
		}
		return originalStyleSetProperty.call(this, key, val)
	}
	
	function makeModifiedSetCssText(originalSetCssText) {
		return function modifiedSetCssText(css) {
			var fontFamilyMatch = css.match(/\b(?:font-family:([^;]+)(?:;|$))/i)
			if(fontFamilyMatch && fontFamilyMatch.length == 1) {
				css = css.replace(/\b(font-family:[^;]+(;|$))/i, '').trim()
				var allowed = getAllowedFontFamily(fontFamilyMatch[1]) || DEFAULT
				if(css.length && css[css.length - 1] != ';')
					css += ';'
				css += "font-family: " + allowed + ";"
			}
			return originalSetCssText.call(this, css)
		}
	}
	
	var modifiedSetAttribute = (function() {
		var innerModify = makeModifiedSetCssText(function (val) {
			return originalSetAttrib.call(this, 'style', val)
		})
		return function modifiedSetAttribute(key, val) {
			if(key.toLowerCase() == 'style') {
				return innerModify.call(this, val)
			}
			return originalSetAttrib.call(this, key, val)
		}
	})();
	
	function makeModifiedInnerHTML(originalInnerHTML) {
		return function modifiedInnerHTML(html) {
		
			var retval = originalInnerHTML.call(this, html)
			recursivelyModifyFonts(this.parentNode)
			return retval
		}
	}
	
	function recursivelyModifyFonts(elem) {
		if(elem) {
			if(elem.style && elem.style.fontFamily) {
				modifiedCssSetProperty.call(elem.style, 'font-family', elem.style.fontFamily) 
			}
			if(elem.childNodes)
				elem.childNodes.forEach(recursivelyModifyFonts)
		}
		return elem
	}

	function modifiedAppend(child) {
		child = recursivelyModifyFonts(child)
		return originalNodeAppendChild.call(this, child)
	}
	
		
	var success = true
	
	function overrideFunc(obj, name, f) {
		try {
			Object.defineProperty(obj.prototype, name, defineobjectproperty(f, true))
		} catch(e) {success=false;}
	}
	
	
	function overrideSetter(obj, name, makeSetter) {
		try {
			var current = Object.getOwnPropertyDescriptor(obj.prototype, name)
			current.set = makeSetter(current.set)
			current.configurable = false
			Object.defineProperty(obj.prototype, name, current)
		} catch(e) {success=false;}
	}
	
	overrideFunc(Node, 'appendChild', modifiedAppend)
	overrideFunc(CSSStyleDeclaration, 'setProperty', modifiedCssSetProperty)
	overrideFunc(Element, 'setAttribute', modifiedSetAttribute)
	
		try {
		Object.defineProperty(CSSStyleDeclaration.prototype, "fontFamily", {
			set: function fontFamily(f) {
				modifiedCssSetProperty.call(this, 'font-family', f)
			},
			get: function fontFamily() {
				return this.getPropertyValue('font-family')
			}
		})
	} catch(e) {success=false;}
	
	
	overrideSetter(CSSStyleDeclaration,'cssText', makeModifiedSetCssText)
	overrideSetter(Element,'innerHTML', makeModifiedInnerHTML)
	overrideSetter(Element,'outerHTML', makeModifiedInnerHTML)
	
} + ')();';


var script = document.createElement('script')
script.textContent = pvft;
(document.head||document.documentElement).appendChild(script)
script.parentNode.removeChild(script)
