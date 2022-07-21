"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const session = require("express-session");
const passport = require("passport");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const PORT = process.env.PORT || 5000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        allowedHeaders: ['content-type'],
        origin: 'http://localhost:3000',
        credentials: true,
    });
    app.use(session({
        secret: process.env.SESSION_SECRET,
        cookie: {
            maxAge: 1000 * 60 * 60,
            httpOnly: false
        },
        saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}
bootstrap();
//# sourceMappingURL=main.js.map