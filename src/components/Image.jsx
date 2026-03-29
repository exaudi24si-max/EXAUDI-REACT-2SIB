// src/components/Image.jsx
export default function Image() {
    return (
        <img 
            src="/img/saya.png"
            alt="Chief Avatar" 
            style={{ width: '100%', height: '100%', 
                objectFit: 'cover', display: 'block' }} 
        />
    );
}