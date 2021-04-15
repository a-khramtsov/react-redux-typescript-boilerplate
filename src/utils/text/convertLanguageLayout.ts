export const convretLanguageLayout = (str: string) => {
	const charsArray = {
		'Q': 'Й',
		'W': 'Ц',
		'E': 'У',
		'R': 'К',
		'T': 'Е',
		'Y': 'Н',
		'U': 'Г',
		'I': 'Ш',
		'O': 'Щ',
		'P': 'З',
		'[': 'Х',
		']': 'Ъ',
		'A': 'Ф',
		'S': 'Ы',
		'D': 'В',
		'F': 'А',
		'G': 'П',
		'H': 'Р',
		'J': 'О',
		'K': 'Л',
		'L': 'Д',
		'Z': 'Я',
		'X': 'Ч',
		'C': 'С',
		'V': 'М',
		'B': 'И',
		'N': 'Т',
		'M': 'Ь',
		'q': 'й',
		'w': 'ц',
		'e': 'у',
		'r': 'к',
		't': 'е',
		'y': 'н',
		'u': 'г',
		'i': 'ш',
		'o': 'щ',
		'p': 'з',
		'a': 'ф',
		's': 'ы',
		'd': 'в',
		'f': 'а',
		'g': 'п',
		'h': 'р',
		'j': 'о',
		'k': 'л',
		'l': 'д',
		';': 'ж',
		// eslint-disable-next-line prettier/prettier
		'\'': 'э',
		'z': 'я',
		'x': 'ч',
		'c': 'с',
		'v': 'м',
		'b': 'и',
		'n': 'т',
		'm': 'ь',
		',': 'б',
		'.': 'ю',
		'/': '.',
	}

	let convertedText = ''

	for (let i = 0; i < str.length; i++) {
		const characterAtIndex = str.charAt(i) as keyof typeof charsArray
		let convertedCharacter = ''

		if (characterAtIndex in charsArray) {
			convertedCharacter = charsArray[characterAtIndex]
		} else {
			convertedCharacter = characterAtIndex
		}
		convertedText += convertedCharacter
	}

	return convertedText
}
