import React, { useState } from "react";
import { ChatArea } from "./ChatArea";
import { ChatInput } from "./ChatInput";
import { ControlPanel } from "./ControlPanel";

export const Chat = () => {
    const [messages, setMessages] = useState([
        { role: 'user', content: 'Merhaba!' },
        { role: 'assistant', content: 'Selam! Size nasıl yardımcı olabilirim?' },
        { role: 'user', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem eveniet maiores totam doloremque neque alias ut officia nostrum excepturi officiis.' },
        { role: 'assistant', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fugit natus porro tempore veniam facere ullam. Consequuntur fugiat obcaecati ullam hic vel inventore in vitae repudiandae aspernatur. Reprehenderit molestiae quaerat repellendus ullam. Ex veritatis ducimus voluptatem perspiciatis nulla inventore, nostrum corporis quam nam aperiam delectus minus, placeat in nobis modi repellendus itaque officiis, saepe illo alias! Facilis deserunt, aliquid adipisci neque culpa corporis quia ratione quo sed illum eius quaerat voluptate mollitia unde blanditiis autem fuga soluta? Beatae quidem impedit expedita! Cum enim non eius doloremque, minima, dolores tempora odio asperiores, ipsa dolor quod accusamus obcaecati doloribus autem quo. Quas dolorum quisquam culpa sed totam fugiat porro, explicabo a iusto! Laboriosam libero hic iste quos, earum atque? Quos voluptas error ullam, quia eius perspiciatis placeat nam mollitia dolorem saepe!' },
        { role: 'user', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem eveniet maiores totam doloremque neque alias ut officia nostrum excepturi officiis.' },
        { role: 'assistant', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fugit natus porro tempore veniam facere ullam. Consequuntur fugiat obcaecati ullam hic vel inventore in vitae repudiandae aspernatur. Reprehenderit molestiae quaerat repellendus ullam. Ex veritatis ducimus voluptatem perspiciatis nulla inventore, nostrum corporis quam nam aperiam delectus minus, placeat in nobis modi repellendus itaque officiis, saepe illo alias! Facilis deserunt, aliquid adipisci neque culpa corporis quia ratione quo sed illum eius quaerat voluptate mollitia unde blanditiis autem fuga soluta? Beatae quidem impedit expedita! Cum enim non eius doloremque, minima, dolores tempora odio asperiores, ipsa dolor quod accusamus obcaecati doloribus autem quo. Quas dolorum quisquam culpa sed totam fugiat porro, explicabo a iusto! Laboriosam libero hic iste quos, earum atque? Quos voluptas error ullam, quia eius perspiciatis placeat nam mollitia dolorem saepe!' },
    ]);

    return (
        <div>
            <div>
                <ChatArea messages={messages} />
            </div>
            <div className="mt-3">
                <ControlPanel />
                <ChatInput />
            </div>
        </div>
    )
}