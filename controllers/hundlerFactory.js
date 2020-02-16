exports.getAll = Model => 
    async (req, res, next) => {
        try {
            const doc = await Model.find();

            res.status(200).json({
                status: 'success',
                data: {
                    data: doc
                }
            });
            
        } catch (err) {
            res.status(401).json({
                status: 'fail',
                message: err
            });
        }
    }

 exports.createOne =  Model => 
    async (req, res, next) => {
        try {
            console.log(req.body);
            const doc = await Model.create(req.body);

            // console.log(doc);

            res.status(201).json({
                status: 'success',
                data: {
                    data: doc
                }
            });
            
        } catch (err) {
            res.status(401).json({
                status: 'fail',
                message: err
            });
        }
    }

exports.deleteOne = Model => 
    async (req, res, next) => {
        try {
            const doc = await Model.findByIdAndRemove(req.params.TodoId);

            if(!doc) return next();

            res.status(200).json({
                status: 'success',
                message: 'Todo has been deleted with success!'
            });
        } catch (err) {
            res.status(401).json({
                status: 'fail',
                message: err
            });
        }
    }

exports.updateOne = Model => 
    async (req, res, next) => {
        try {
            const doc = await Model.findByIdAndUpdate(req.params.TodoId, {
                title: req.body.title,
                done: req.body.done
            },
            {
                new: true, 
                runValidators: true
            });

            if(!doc) return next();

            res.status(200).json({
                status: 'success',
                message: 'Todo has been updated with success!',
                data: {
                    data: doc
                }
            });
        } catch (err) {
            res.status(401).json({
                status: 'fail',
                message: err
            });
        }
    }

exports.getOne = Model => 
    async (req, res, next) => {
        try {
            const doc = await Model.findById(req.params.TodoId);

            if(!doc) return next();

            res.status(201).json({
                status: 'success',
                data: {
                    data: doc
                }
            });
        } catch (err) {
            res.status(401).json({
                status: 'fail',
                message: err
            });
        }
    }