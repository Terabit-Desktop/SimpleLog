import { Logger } from '../src/logger';

test('Try Logs', () => {
    let IsSomethingBroken = false;
    try {
        const logger = new Logger(true, "SLTest");
        logger.Debug("This is an DEBUG message");
        logger.Info("This is an INFO message");
        logger.Warn("This is an WARN message");
        logger.Error("This is an ERROR message");
        logger.Fatal("This is an FATAL message");
        IsSomethingBroken = false;
    } catch (error) {
        IsSomethingBroken = true;
    }

    expect(IsSomethingBroken).toBe(false);
});