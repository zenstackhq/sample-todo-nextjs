import { requestHandler } from '@zenstackhq/next';
import { getEnhancedPrisma } from 'server/enhanced-db';

export default requestHandler({
    getPrisma: (req, res) => getEnhancedPrisma({ req, res }),
});
