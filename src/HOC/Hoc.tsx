import * as React from 'react'

interface INewTextProps {
    text: string
}

interface ITextProps {
    num? : number
}

// props proxy
const Hoc = (WrappedComponent: React.SFC<ITextProps & INewTextProps>) => {
    return (
        class HText extends React.Component<ITextProps & INewTextProps> {
            public render() {
                return (
                    <WrappedComponent {...this.props} />
                )
            }
        }
    )
}

const Text = Hoc((props: ITextProps & INewTextProps) => {
    return (
        <div>
            <p>--------------------------------------</p>
            <p>{props.text}</p>
            <p>{props.num}</p>
        </div>
    )
})

// 反向继承

// interface ButtonProps {
//     text: string
// }
// const Hocc = (WrappedComponent: any) => {
//     return (
//         class HButton extends WrappedComponent {
//             public render() {
//                 return super.render()
//             }
//         }
//     )
// }

// @Hocc
// class Button extends React.Component<ButtonProps> {
//     render() {
//         return (
//             <button>反向继承</button>
//         )
//     }
// }
export default Text