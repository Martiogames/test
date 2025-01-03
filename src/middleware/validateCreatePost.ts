import { NextFunction, Request, Response } from "express";
import { RequestPayloadPost } from "../@types/RequestPayloadCreatePost.type";

export function validateCreatePost(req: Request<{}, {}, RequestPayloadPost>, res: Response, next: NextFunction): void {

    // Verificar se o corpo da requisição existe
    if (!req.body || typeof req.body !== 'object') {
        
        res.status(400).json({ status: 400, message: "O corpo da requisição é obrigatório e deve ser um objeto JSON válido." }).end();
        return;
    }

    const {banner_url, content, title } = req.body || {}; // Fallback para evitar undefined

    // Verificar se algum campo está vazio ou não foi enviado
    if (!banner_url || !content || !title) {
        res.status(400).json({ status: 400, message: "Todos os campos 'banner_url', 'content' e 'title' são obrigatórios e não podem estar vazios." }).end();
        return;
    }

    next(); // Continua para o próximo middleware ou controller
}
