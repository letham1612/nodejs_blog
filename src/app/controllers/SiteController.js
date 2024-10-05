const Course = require('../models/Course');

class SiteController {
    // {GET}/
    async index(req, res) {
        try {
            const courses = await Course.find({}); // Sử dụng await
            res.json(courses); // Trả về danh sách khóa học
        } catch (err) {
            res.status(400).json({ error: 'ERROR!!!' }); // Xử lý lỗi
        }
    }

    // {GET} /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
