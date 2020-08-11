function select(){

    /*下面代码是获取url最后一位地址
    * */
    //隐藏错误提示框
    $('.alert-danger').css("display", "none");

    //modal绑定hide事件
    $('#modalAdd').on('hide.bs.modal', function () {
        reset();
    })
    $('#modalEdit').on('hide.bs.modal', function () {
        reset();
    })
    $.jgrid.defaults.styleUI = 'Bootstrap';
    var url = "/meet/findAll/";
    $.get(url, function (data) {
        var meetingList=data.MeetingList;
        $('#meetingtable').bootstrapTable('destroy').bootstrapTable({
            data:meetingList,
            // toolbar: '#toolbar',        //工具按钮用哪个容器
            striped: true,           //是否显示行间隔色
            cache: false,            //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,          //是否显示分页（*）
            sortable: false,           //是否启用排序
            sortOrder: "asc",          //排序方式
            queryParams: "queryParams",//传递参数（*）
            sidePagination: "client",      //分页方式：client客户端分页，server服务端分页（*）
            pageNumber:1,            //初始化加载第一页，默认第一页
            pageSize: 20,            //每页的记录行数（*）
            pageList: [10, 25, 50, 100],    //可供选择的每页的行数（*）
            // clickToSelect: true,        //是否启用点击选中行
            // height: 200,            //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            // width: 400,
            uniqueId: "m_uuid",           //每一行的唯一标识，一般为主键列
            cardView: false,          //是否显示详细视图
            detailView: false,          //是否显示父子表
            columns: [{
                field: "checkStatus",
                title: "全选",
                checkbox: true,
                align: 'center'
            },{
                field: 'm_uuid',
                title: 'uuid',
                visible: false
            },
                {
                    field: 'm_name',
                    title: '信息标题',
                },
                {
                    field: 'm_content',
                    title: '信息概要',
                },{
                    field: 'm_person',
                    title: '信息分享人',
                },{
                    field: 'm_typeStr',
                    title: '信息分享会议类型'
                    ,
                },{
                    field: 'm_meetingid',
                    title: '会议id'
                    ,
                },{
                    field: 'm_meetingtime',
                    title: '会议时间'
                    ,
                },{
                    field: 'm_createtime',
                    title: '创建信息时间',
                },{
                    field: 'operator',
                    title: '操作',
                    align: 'center',
                    valign: 'middle',
                    width: '10%',
                    // visible: false,
                    formatter: function (value, row, index) {
                        // var sid_code = base64encode(row.sid + '');   //  sid 加密处理
                        // alert(sid_code);
                        return '<a href="#">' +
                            '<a href="javascript:void(0)" title="显示">' +
                            '<i class="glyphicon glyphicon-eye-open"></i> ';
                    },
                    events: {
                    'click a[title=显示]': function (e, value, row, index) {
                        // e.preventDefault();
                        var rows=$("#meetingtable").bootstrapTable("getData")[index];
                        alert(JSON.stringify(rows))
                        alert('click change button');
                    },
                    }
                }

            ],


        });

    });

}
