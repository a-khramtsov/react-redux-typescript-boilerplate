import { baseURL } from 'api'

import contentHolder from 'assets/img/content-holder.png'

export enum FileTypeEnum {
	content,
	user,
}

export const getFileSource = (fileSrc: string | null, type = FileTypeEnum.content) => {
	let source = ''

	if (fileSrc && typeof fileSrc === 'string') {
		if (fileSrc.includes('http')) source = fileSrc
		else source = baseURL + '/storage/' + fileSrc
	} else {
		source = getPlaceholderByType(type)
	}

	return source
}

const getPlaceholderByType = (type: FileTypeEnum): string => {
	let placehodler = null
	switch (type) {
		case FileTypeEnum.content: {
			placehodler = contentHolder
			break
		}
		case FileTypeEnum.user: {
			placehodler = contentHolder
			break
		}
		default: {
			placehodler = contentHolder
			break
		}
	}
	return placehodler
}
