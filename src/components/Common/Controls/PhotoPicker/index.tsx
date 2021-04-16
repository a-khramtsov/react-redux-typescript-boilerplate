import { ChangeEvent, ComponentProps } from 'react'
import styled from 'styled-components'
import { CloseIcon, AddIcon } from 'assets/svg'
import { AxiosResponse } from 'axios'
import { showToast, ToastStatusEnum } from 'utils/toast/showToast'
import Input from 'components/Common/Controls/Input'
import { FileTypeEnum, getFileSource } from 'utils/api/getFileSource'

type PropsType = ComponentProps<typeof Input>

const PhotoPicker = ({ value, onChange, name, ...props }: PropsType) => {
	const handlePhotoUpload = async (file: File) => {
		// const response = (await API.uploadImage(file)) as AxiosResponse
		// if (response.status === 200) {
		// 	onChange(response)
		// } else {
		// 	showToast(ToastStatusEnum.error, 'Не удалось загрузить фото')
		// }
	}

	console.log(value)

	return (
		<PhotoWrapper>
			{value ? (
				<Photo>
					<img src={getFileSource(value, FileTypeEnum.content)} alt='photo' />
					<DeletePhotoBtn onClick={() => onChange('')} type='button'>
						<CloseIcon />
					</DeletePhotoBtn>
				</Photo>
			) : (
				<AddPhotoBtn htmlFor={name}>
					<HiddenFileInput
						{...props}
						id={name}
						type='file'
						onChange={(e: ChangeEvent<HTMLInputElement>) => {
							const files = e.target.files as FileList
							handlePhotoUpload(files[0])
						}}
					/>
					<AddIcon />
				</AddPhotoBtn>
			)}
		</PhotoWrapper>
	)
}

const PhotoWrapper = styled.div`
	padding: 15px 12px;
	border-radius: 8px;
	width: fit-content;
`

const Photo = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	position: relative;
	& img {
		max-width: 300px;
		max-height: 300px;
		width: 100%;
		border-radius: 5px;
		margin-right: 8px;
	}
`

const DeletePhotoBtn = styled.button`
	display: flex;
`

const AddPhotoBtn = styled.label`
	cursor: pointer;
	background: #eaeffc;
	border-radius: 3px;
	width: 60px;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	svg {
		width: 26px;
		height: 26px;
	}
`

const HiddenFileInput = styled.input`
	opacity: 0;
	visibility: hidden;
	position: absolute;
`

export default PhotoPicker
