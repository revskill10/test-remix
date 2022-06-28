import {
    useColorMode,
    Switch
} from '@chakra-ui/react'

export const ColorModeToggle = () => {
    const { toggleColorMode } = useColorMode();
    return (
        <Switch
            id="dark_mode"
            colorScheme="teal"
            size="lg"
            onChange={toggleColorMode}
        />
    )
}