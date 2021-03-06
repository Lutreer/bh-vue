<template>
    <div></div>
</template>

<script>
    /**
     * 直接上传组件 directUpload
     * @module directUpload
     *
     * @fires add -文件新增时触发，返回data（文件信息对象）
     * @fires submit -文件提交时触发，返回data（文件信息对象）
     * @fires done -文件提交成功后触发，返回data（文件信息对象）
     * @fires fail -文件提交失败时触发，返回data（文件信息对象）
     *
     * @example
     *     <caption>html</caption>
     *     <direct-upload :limit='1' :uploadUrl="" :uploadParam="" :deleteUrl="" :deleteParam="" :displayType="" :buttonType=""></direct-upload>
     */
    export default {
        /**
         * @property {String/Array} [ftype=['jpg', 'png', 'jpeg']] 上传文件的类型限制
         * @property {String/Number} [width=200] 展示图片的宽度
         * @property {String/Number} [height=150] 展示图片的高度
         * @property {Number} [limit=5] 上传数量限制
         * @property {Number} [size=2048] 文件大小限制(Kb)
         * @property {Boolean} [multiple=false] 是否支持多文件选择
         * @property {String} [buttonType=button] - 按钮类型，block和button
         * @property {String} [displayType=image] - 显示类型，file和image
         * @property {String} [storeId=file] 上传文件的类型
         * @property {Array} imagesUrl - 已上传图片url的数组，用于对原有图片的展示
            支持两种方式设置原有数据：
            1,直接存储图片地址。格式：['http://图片1地址', 'http://图片2地址']
            2,存储对象：id为图片id，fileUrl代表图片路径。格式[{id: '001', fileUrl: 'htt...'}]
         * @property {String} uploadUrl - 上传url
         * @property {Object} uploadParam - 上传附加参数
         * @property {String} deleteUrl - 删除url
         * @property {Object} deleteParam - 删除附加参数
         * @property {Boolean} readonly - 是否只读，默认false
         * @property {Array} editButtons - 功能按钮，默认['download', 'preview', 'delete', 'reupload']
         */
        props: {
            'ftype': {
                type: [Array, String],
                default () {
                    return ['jpg', 'png', 'jpeg'];
                }
            },
            'width': {
                default: 200
            },
            'height': {
                default: 150
            },
            'limit': {
                type: Number,
                default: 5
            },
            'size': {
                type: Number,
                default: 2048
            },
            'multiple': {
                type: Boolean,
                default: false
            },
            'buttonType': {
                type: String,
                default: 'button'
            },
            'displayType': {
                type: String,
                default: 'image'
            },
            'storeId': {
                type: String,
                default: ''
            },
            'imagesUrl': {
                type: Array,
                default: []
            },
            'uploadUrl': {
                type: String,
                default: ''
            },
            'uploadParam': {
                type: Object,
                default: {}
            },
            'deleteUrl': {
                type: String,
                default: ''
            },
            'deleteParam': {
                type: Object,
                default: {}
            },
            'readonly': {
                type: Boolean,
                default: false
            },
            'editButtons': {
                type: Array,
                default: () => {
                	return ['download', 'preview', 'delete', 'reupload'];
                }
            }
        },
        methods: {
            /**
             * 销毁
             */
            destroy () {
                $(this.$el).emapUpload('destroy');
            }
        },
        ready () {
            var vm = this;
            var el = $(this.$el);

            var type = $.isArray(this.ftype) ? this.ftype : [this.ftype];

            el.directUpload({
            	readonly: this.readonly,
                editButtons: this.editButtons,
                type: type,
                storeId: this.storeId,
                size: this.size,
                limit: this.limit,
                width: this.width,
                height: this.height,
                multiple: this.multiple,
                displayType: this.displayType,
                buttonType: this.buttonType,
                uploadUrl: this.uploadUrl,
                uploadParam: this.uploadParam,
                deleteUrl: this.deleteUrl,
                deleteParam: this.deleteParam,
                imagesUrl: this.imagesUrl,
                add (e, data) {
                    console.log('导入前触发事件');
                    console.log(data);
                    vm.$dispatch('add', data);
                },
                submit (e, data) {
                    vm.$dispatch('submit', data);
                },
                done (e, data) {
                    vm.$dispatch('done', data);
                },
                fail (e, data) {
                    vm.$dispatch('fail', data);
                }
            });
        },
        beforeDestroy () {
            this.destroy();
        }
    };
</script>
