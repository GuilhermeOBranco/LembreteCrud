type prioridade = 'BAIXA' | 'MÉDIA'| 'ALTA';

export interface Lembrete {
    id: number;
    conteudo:string;
    arquivado: boolean;
    prioridade: prioridade;
    modificado: number;
}
