const baseModel = require('./base.js')

class followModel extends baseModel {
  getName() {
    return 'follow'
  }

  getSchema() {
    return {
      uid: {type: Number, required: true},
      projectid: {type: Number, required: true},
      projectname: {type: String, required: true},
      icon: String,
      color: String,
      logo: Number,
    }
  }

  /**
   * @param {Number} uid 用户id
   * @param {Number} projectid 项目id
   * @param {String} projectname 项目名
   * @param {String} icon 项目图标
   */

  save(data) {
    //关注
    const saveData = {
      uid: data.uid,
      projectid: data.projectid,
      projectname: data.projectname,
      icon: data.icon,
      color: data.color,
      logo: data.logo,
    }
    const follow = new this.model(saveData)
    return follow.save()
  }

  del(projectid, uid) {
    return this.model.remove({
      projectid: projectid,
      uid: uid,
    })
  }

  list(uid) {
    return this.model
      .find({
        uid: uid,
      })
      .exec()
  }

  listByProjectId(projectid) {
    return this.model.find({
      projectid: projectid,
    })
  }

  checkProjectRepeat(uid, projectid) {
    return this.model.countDocuments({
      uid: uid,
      projectid: projectid,
    })
  }

  updateById(id, typeid, data) {
    return this.model.update(
      {
        uid: id,
        projectid: typeid,
      },
      data,
      {runValidators: true},
    )
  }
}

module.exports = followModel
