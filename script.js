function showSection(id) {
	const sections = document.querySelectorAll('.section')
	sections.forEach(section => {
		section.style.display = 'none'
	})
	document.getElementById(id).style.display = 'block'
}

function showSkin(skinId) {
	const skins = document.querySelectorAll('.skin-display')
	skins.forEach(skin => {
		skin.style.display = 'none' // Скрываем все скины
	})
	document.getElementById(skinId).style.display = 'block' // Показываем выбранный скин
}

function showEpicSet(setId) {
	const epicSets = {
		dimensional:
			'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/void_stone_lg.png',
		enduring:
			'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/platemail_lg.png',
		flowering:
			'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/mystic_staff_lg.png',
		flowing:
			'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ultimate_scepter_lg.png',
	}
	const display = document.getElementById('epic-set-display')
	display.innerHTML = `<img src="${epicSets[setId]}" alt="${setId} set" />`
}

function showArcanaStyle(style) {
	const display = document.getElementById('arcana-style-display')
	if (style === 'classic') {
		display.innerHTML =
			'<img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/arcana/spectre_arcana.png" alt="Classic Arcana">'
	} else if (style === 'red') {
		display.innerHTML =
			'<img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/arcana/spectre_arcana_red.png" alt="Red Style">'
	}
}

function showMindset() {
	const sections = document.querySelectorAll('.section')
	sections.forEach(section => {
		section.style.display = 'none' // Скрываем все секции
	})
	document.getElementById('mindset').style.display = 'block' // Показываем Mindset
}
