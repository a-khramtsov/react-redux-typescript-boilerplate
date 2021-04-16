enum KeyCodeEnum {
	up = 'ArrowUp',
	left = 'ArrowLeft',
	right = 'ArrowRight',
	down = 'ArrowDown',
	w = 'KeyW',
	s = 'KeyS',
	d = 'KeyD',
	a = 'KeyA',
}

const isDirection = (code: string, directions: KeyCodeEnum[]) => {
	let correct = false

	directions.map(dir => {
		if (code === dir) {
			correct = true
		}
	})

	return correct
}

export const isDown = (event: KeyboardEvent) => {
	return isDirection(event.code, [KeyCodeEnum.down])
}
export const isUp = (event: KeyboardEvent) => {
	return isDirection(event.code, [KeyCodeEnum.up])
}
export const isLeft = (event: KeyboardEvent) => {
	return isDirection(event.code, [KeyCodeEnum.left])
}
export const isRight = (event: KeyboardEvent) => {
	return isDirection(event.code, [KeyCodeEnum.right])
}
