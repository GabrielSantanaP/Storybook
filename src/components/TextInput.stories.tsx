import { StoryObj, Meta } from "@storybook/react";
import { Envelope } from "phosphor-react";
import { TextInput, TextInputInputProps, TextInputRootProps } from "./TextInput";

export default {
    title: "Components/TextInput",
    component: TextInput.Root,
    args: {
       children: [
            <TextInput.Icon>
               <Envelope />
           </TextInput.Icon>,
           <TextInput.Input placeholder="Type Your E-mail Address?" />
       ],
    },
    argTypes: {
        children: {
            table: {
                disabled: true,
            }
        }
    },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {
    
}

export const WithIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: <TextInput.Input placeholder="Type Your E-mail Address?" />
    }
}

