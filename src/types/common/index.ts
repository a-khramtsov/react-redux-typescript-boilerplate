import React, { ChangeEvent, Component } from 'react'

export type VoidFuncType = () => void
export type ComponentType<T = any> = typeof Component | React.FC<T>

export type ChangeType<T = HTMLInputElement> = ChangeEvent<T>
export type ClickType = MouseEvent
