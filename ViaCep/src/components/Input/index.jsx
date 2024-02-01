import { InputText } from "./style"

export const Input = ({
    placeholder,
    editable,
    fieldValue,
    onChangeText,
    keyType,
    maxLentgh
}) => {
    return (
        <InputText
            placeholder={placeholder}
            editable={editable}
            keyboardType={keyType}
            maxLentgh={maxLentgh}
            fieldValue={fieldValue}
            onChangeText={onChangeText}
        />
    )
}