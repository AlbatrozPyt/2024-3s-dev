import { FieldContent } from "./style"
import { Input } from "../Input"
import { Label } from "../Label"


export const BoxInput = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyType = 'default',
    maxLentgh
}) => {
    return (
        <FieldContent>
            <Label textLabel={textLabel} />

            <Input 
                editable={editable} 
                placeholder={placeholder} 
                keyType={keyType} 
                maxLentgh={maxLentgh}
                fieldValue={fieldValue}
                onChangeText={onChangeText}   
                fieldWidth={fieldWidth}
            />
        </FieldContent>
    )
}