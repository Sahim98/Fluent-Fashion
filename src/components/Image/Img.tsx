import { useEffect, useState } from "react"
import { ImgProps } from "../../utils/PropsType"

function Img({src, thumb_src, className}: ImgProps) {
    const [url, setUrl] = useState<string>(thumb_src || src)
    const [blur, setBlur] = useState<string>(`blur(5px)`)
    useEffect(()=> {
        const image : HTMLImageElement = new Image()

        image.src = src
        image.onload = () => {
            setUrl(src)
            setBlur("")
        }
        image.onerror = () => {
            setUrl(thumb_src)
            setBlur("")
        }

    }, [src, thumb_src])

  return (
    <img src={url} className={className} style={{filter: blur}} />
  )
}

export default Img
